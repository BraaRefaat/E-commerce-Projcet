<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      class="px-5"
      location="right"
      v-model="drawer"
      temporary
      width="370"
      dir="rtl"
    >
      <v-card elevation="0" class="px-0 mt-2 ml-2">
        <v-card-title
          class="px-0 d-flex justify-space-between align-center"
          style="font-size: 17px; font-weight: bold; color: #1e9ad1"
        >
          القائمة
          <v-btn
            @click="drawer = false"
            elevation="0"
            size="40"
            color="#1e9ad1"
            variant="text"
            style="border-radius: 50%"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <v-list>
          <v-list-item
            v-for="category in categories"
            :key="category.route"
            @click="
              $router.push({
                name: 'products_category',
                query: { title: category.title, category: category.route },
              })
            "
          >
            <v-list-title>
              {{ category.title }}
            </v-list-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { productsModule } from "@/stores/products";
import { storeToRefs } from "pinia";
import { ref, inject, onMounted } from "vue";
const productStore = productsModule();
const { categories } = storeToRefs(productStore);

const drawer = ref(false);
const Emitter = inject("Emitter");

onMounted(() => {
  Emitter.on("openMenu", () => {
    drawer.value = true;
  });
});
</script>

<style lang="scss" scoped>
.menu-drawer {
  .v-list-item {
    color: #2a2a2a;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>
