<template>
  <v-dialog v-model="dialog" persistent style="width: 40%; font-family: Tahoma">
    <v-card class="text-center flex-column align-center py-7">
      <v-icon
        color="#007226"
        size="80"
        style="
          border: 1px solid #007226;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        "
        >mdi-check</v-icon
      >
      <v-card-title style="font-size: 30px; font-weight: bold; color: #023047">
        تم تأكيد الطلب بنجاح
      </v-card-title>
      <v-card-actions>
        <v-btn
          variant="elevated"
          class="mt-5"
          style="letter-spacing: normal"
          color="#1e9ad6"
          @click="resetOrderProducts"
          >حسناً</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { cartModule } from "@/stores/Cart";
import { ref, defineProps, defineEmits, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const dialog = ref(false);
const cartStore = cartModule();
const resetProducts = cartStore.resetItems;
const props = defineProps({
  popup: {
    type: Boolean,
  },
});
const emits = defineEmits(["close_popup"]);
watch(dialog, (newValue) => {
  if (!newValue) {
    setTimeout(() => {
      emits("close_popup");
    }, 300);
  }
});

const resetOrderProducts = () => {
  resetProducts();
  dialog.value = false;
  router.push({ name: "home" });
};

onMounted(() => {
  dialog.value = props.popup;
});
</script>

<style lang="scss">
@media (max-width: 950px) {
  .v-dialog {
    width: 100% !important;
    .v-card-title {
      font-size: 22px !important;
    }
  }
}
</style>
