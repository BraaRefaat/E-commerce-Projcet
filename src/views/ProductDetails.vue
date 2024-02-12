<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="5" lg="6" class="text-center">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="product-image"
            width="80%"
            style="object-fit: contain; height: fit-content; max-height: 400px"
            alt=""
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image, image,image"
          ></v-skeleton-loader>
          <v-col cols="12" v-if="!loading" style="height: 200px">
            <v-tabs
              prev-icon="mdi-chevron-left"
              next-icon="mdi-chevron-right"
              direction="horizontal"
              center-active
              v-model="tab"
              height="140"
            >
              <v-tab
                :ripple="false"
                v-for="(img, i) in singleProduct.images"
                :key="i"
                :value="img"
                class="mt-8"
              >
                <img :src="img" style="width: 100%; height: 70px" alt="" />
              </v-tab>
            </v-tabs>
          </v-col>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="5" class="pt-0 pl-6">
          <v-skeleton-loader
            v-if="loading"
            type="article , article, actions"
          ></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold; white-space: pre-wrap"
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-3"
                size="x-small"
                density="comfortable"
              ></v-rating>
              <span class="mt-1" style="font-size: 14px; color: #5f5f5f"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="font-size: 14px; color: #5f5f5f">
              {{ singleProduct.description }}
            </v-card-text>
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: #5f5f5f"
            >
              Brand: {{ singleProduct.brand }}
            </v-card-text>
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 14px; color: #5f5f5f"
            >
              Availability:
              {{ singleProduct.stock > 0 ? "In Stock" : "Out Of Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del>EGP {{ singleProduct.price }}</del> From
              <span class="text-red" style="font-weight: 900; font-size: 16px"
                >EGP
                {{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}</span
              >
            </v-card-text>
            <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
            <div
              class="counter px-1"
              style="
                border-radius: 30px;
                border: 1px solid #aaaaaa;
                width: fit-content;
              "
            >
              <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                id="quantity-counter"
                class="text-center py-2"
                style="
                  border: none;
                  outline: none;
                  width: 60px;
                  font-size: 13px;
                "
                min="1"
                v-model="quantity"
              />
              <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
            </div>
            <v-card-text class="pl-0">
              Subtotal: EGP
              {{
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions
              class="mt-7 w-100 d-flex justify-space-around align-center"
            >
              <v-btn
                variant="outlined"
                class="w-75 text-white"
                style="
                  text-transform: none;
                  background-color: #023047;
                  border-radius: 30px;
                  font-weight: 600;
                  letter-spacing: normal;
                "
                density="compact"
                height="45"
                @click="addToCart(singleProduct)"
                :loading="btnLoading"
                >إضافة لعربة التسوق</v-btn
              >
              <div class="wishlist d-flex flex-column align-center">
                <v-btn style="border-radius: 30px">
                  <v-icon color="#1e9ad1" size="27">mdi-heart-outline</v-icon>
                  <v-tooltip activator="parent" location="bottom center"
                    >إضافة للمفضلة</v-tooltip
                  >
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { storeToRefs } from "pinia";
import { cartModule } from "@/stores/Cart";
import { productsModule } from "@/stores/products";
import { onBeforeMount, inject } from "vue";
import { useRoute } from "vue-router";
const productStore = productsModule();
const getSingleProduct = productStore.getSingleProduct;
const { singleProduct } = storeToRefs(productStore);
const Emitter = inject("Emitter");
const tab = ref("");
const quantity = ref(1);
const loading = ref(false);
const btnLoading = ref(false);
const cartStore = cartModule();
const addProduct = cartStore.addItems;
const addToCart = (item) => {
  item.quantity = quantity;
  btnLoading.value = true;
  setTimeout(() => {
    btnLoading.value = false;
    addProduct(item);
    Emitter.emit("showCartMsg", item.title);
  }, 1000);
};

onBeforeMount(async () => {
  loading.value = true;
  await getSingleProduct(useRoute().params.productId);
  tab.value = singleProduct.thumbnail;
  loading.value = false;
});
</script>
