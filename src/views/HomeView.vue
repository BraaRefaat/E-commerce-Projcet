<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper
      :products="flashDeals"
      title="عروض نابولي"
      title-color="#AE2012"
    />
    <TopCategories />
    <NewProducts :products="newProducts" />
    <QualityFeatures />
    <ProductsSwiper
      :products="topProducts"
      title="منتجات مميزة"
      title-color="#023047"
    />
  </div>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner";
import TheFeatures from "@/components/home_page/TheFeatures";
import TopOffers from "@/components/home_page/TopOffers";
import ProductsSwiper from "@/components/home_page/ProductsSwiper.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import { productsModule } from "@/stores/products";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const productStore = productsModule();
const { flashDeals, newProducts, topProducts } = storeToRefs(productStore);
const getProducts = productStore.getProducts();
onMounted(async () => {
  await getProducts;
});
</script>
