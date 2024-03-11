<template>
  <div class="new-products pt-12">
    <div class="title mb-10 px-5" dir="rtl">
      <h2 style="font-weight: 900; color: #023047">المنتجات الجديدة</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" v-if="!products.length" class="pb-9 px-5">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image , article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="8" class="order-1 order-md-0" v-else>
          <Swiper
            :modules="modules"
            :pagination="{ el: `.swiper-pagination`, clickable: true }"
            :slides-per-view="3"
            :space-between="20"
            :breakpoints="breakPoints"
            class="pb-9 px-5"
          >
            <swiper-slide v-for="product in products" :key="product.id">
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
                      width="60"
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="4">
          <img
            src="../../assets/images/elrehab-new-products.jpg"
            class="w-100"
            style="border-radius: 7px"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, inject } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
const breakPoints = ref({
  0: {
    slidesPerView: 1,
  },
  767: {
    slidesPerView: 2,
  },
  1215: {
    slidesPerView: 3,
  },
});
const shownImage = ref({});
const modules = [Pagination];
const Emitter = inject("Emitter");
const openQuickView = (item) => {
  Emitter.emit("openQuickView", item);
};
</script>

<style lang="scss">
.new-products {
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: #1e9ad1;
    }
  }
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
