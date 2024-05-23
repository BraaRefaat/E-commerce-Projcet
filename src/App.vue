<template>
  <app-layout>
    <router-view />
    <QuickView />
    <v-snackbar
      v-model="bar"
      location="left bottom"
      color="#007226"
      timeout="3000"
      style="letter-spacing: normal; font-family: Tahoma"
    >
      <template v-slot:actions>
        <v-btn @click="bar = false" style="border-radius: 50%"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </template>
      ({{ itemTitle }}) تم إضافته للعربة بنجاح
    </v-snackbar>
  </app-layout>
</template>

<script setup>
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "@/components/global/QuickView.vue";
import { ref } from "vue";
import { onMounted, inject } from "vue";
const bar = ref(false);
const itemTitle = ref("");
const Emitter = inject("Emitter");
onMounted(() => {
  Emitter.on("showCartMsg", (data) => {
    itemTitle.value = data;
    bar.value = true;
  });
});
</script>

<style lang="scss">
#app {
  font-family: Tahoma;
  color: #2a2a2a;
  overflow-x: auto;
  overflow-y: hidden;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
