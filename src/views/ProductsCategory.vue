<template>
  <div class="products-category mt-10">
    <h1 class="text-center mb-7">{{ route.params.title }}</h1>
    <v-container>
      <v-card elevation="0" class="pt-5" min-height="700">
        <v-row v-if="loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="num in categoryProducts.limit"
            :key="num"
          >
            <v-skeleton-loader
              type="image , article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="product in categoryProducts.products"
            :key="product.id"
            class="px-10 px-sm-5 mt-8 mt-lg-0"
          >
            <v-lazy>
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 200px; position: relative; overflow: hidden"
                  >
                    <img
                      v-bind="props"
                      :src="
                        shownImage[product.title]
                          ? shownImage[product.title]
                          : product.thumbnail
                      "
                      class="w-100"
                      :style="`height: 100%; transition: 0.4s all ease-in-out; scale: ${
                        isHovering ? 1.05 : 1
                      }`"
                      :alt="product.title"
                    />
                    <v-btn
                      variant="outlined"
                      density="compact"
                      width="90"
                      height="30"
                      class="quick-view-btn"
                      style="
                        background-color: rgb(246, 246, 246);
                        text-transform: none;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        letter-spacing: normal;
                        font-size: 13px;
                        border-radius: 30px;
                        transition: 0.2s all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(product)"
                      >نظرة سريعة</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-0">
                  {{
                    `(${product.title}) ${product.description}`.length <= 57
                      ? `(${product.title}) ${product.description}`
                      : `(${product.title}) ${product.description}`.substring(
                          0,
                          57
                        ) + "..."
                  }}
                </v-card-text>
                <v-rating
                  v-model="product.rating"
                  half-increments
                  readonly
                  color="yellow-darken-3"
                  size="x-small"
                  density="comfortable"
                ></v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>EGP {{ product.price }}</del> From
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 15px"
                    >EGP
                    {{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle mandatory v-model="shownImage[product.title]">
                  <v-btn
                    v-for="(pic, i) in product.images"
                    :key="i"
                    :value="pic"
                    size="x-small"
                    rounded="xl"
                    :ripple="false"
                    ><img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="
                        border-radius: 50%;
                        border: 1px solid rgb(119, 119, 119);
                      "
                  /></v-btn>
                </v-btn-toggle>
                <div class="mt-5">
                  <v-btn
                    variant="outlined"
                    class="px-13 py-0"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      letter-spacing: normal;
                    "
                    @click="
                      $router.push({
                        name: 'products_details',
                        params: { productId: product.id },
                      })
                    "
                    >عرض المنتج</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { productsModule } from "@/stores/products";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { watchEffect, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
const route = useRoute();
const shownImage = ref({});
const loading = ref(false);
const productStore = productsModule();
const { categoryProducts } = storeToRefs(productStore);
const getProductsCategory = productStore.getProductsByCategory;
const Emitter = inject("Emitter");
const openQuickView = (item) => {
  Emitter.emit("openQuickView", item);
};
watchEffect(async () => {
  if (route.name == "products_category") {
    document.documentElement.scrollTo(0, 0);
    loading.value = true;
    await getProductsCategory(route.query.category);
    loading.value = false;
  }
});
onMounted(async () => {
  if (!route.query.category) {
    return router.go(-1);
  }
  loading.value = true;
  await getProductsCategory(route.query.category);
  loading.value = false;
});
</script>

<style lang="scss">
.products-category {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
