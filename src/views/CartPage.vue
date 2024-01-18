<template>
  <div class="cart-page">
    <v-container fluid>
      <v-row dir="rtl">
        <v-col cols="12" class="pb-0 px-0">
          <v-breadcrumbs
            :items="['الصفحة الرئيسية', 'عربة التسوق']"
            style="font-size: 14px"
          >
            <template v-slot:divider>
              <v-icon color="#5f5f5f">mdi-chevron-left</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card-title
            class="px-0 pb-0 d-flex justify-space-between align-center"
            style="font-size: 27px; font-weight: bold; color: #023047"
          >
            عربة التسوق
          </v-card-title>
          <div
            class="bar-parent mt-5 position-relative"
            v-if="cartItems.length"
          >
            <svg
              class="icon-shipping-truck"
              width="30"
              :style="`
              position: absolute;
              bottom: 50%;
              z-index: 1;
              right: calc(${
                parseInt((calcTotalPrice / 10000) * 100) < 3
                  ? 3
                  : parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;
              `"
              transform="scale(-1 1)"
              viewBox="0 0 40.55 24"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    :fill="
                      parseInt((calcTotalPrice / 10000) * 100) <= 50
                        ? '#F44336'
                        : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                          parseInt((calcTotalPrice / 10000) * 100) < 100
                        ? '#ee7300'
                        : '#007226'
                    "
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    :fill="
                      parseInt((calcTotalPrice / 10000) * 100) <= 50
                        ? '#F44336'
                        : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                          parseInt((calcTotalPrice / 10000) * 100) < 100
                        ? '#ee7300'
                        : '#007226'
                    "
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-progress-linear
              reverse
              :color="
                parseInt((calcTotalPrice / 10000) * 100) <= 50
                  ? '#F44336'
                  : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? '#ee7300'
                  : '#007226'
              "
              height="10"
              :model-value="
                parseInt((calcTotalPrice / 10000) * 100) < 3
                  ? 3
                  : parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              "
              striped
              style="border-radius: 30px"
            ></v-progress-linear>
          </div>
          <v-card-text
            class="px-0 pt-2"
            style="color: #5f5f5f; letter-spacing: normal"
            v-if="!cartItems.length"
            >شحن مجاني لجميع الطلبات التي تبدأ من 10000 EGP</v-card-text
          >
          <v-card-text
            class="px-0 pt-2"
            style="color: #5f5f5f"
            v-if="cartItems.length && 10000 - calcTotalPrice > 0"
          >
            متبقي لك {{ 10000 - calcTotalPrice }} EGP للحصول على ميزة الشحن
            المجاني
          </v-card-text>
          <v-card-text
            class="px-0 pt-2"
            style="color: #5f5f5f"
            v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
          >
            طلبك الآن متضمن في الشحن المجاني
          </v-card-text>
          <v-card-text
            class="px-0 pt-2 mt-4 text-center"
            style="color: #5f5f5f; letter-spacing: normal"
            v-if="!cartItems.length"
            >عربة التسوق الخاصة بك فارغة</v-card-text
          >
          <v-card-actions class="px-0 justify-center" v-if="!cartItems.length">
            <v-btn
              style="
                text-transform: none;
                border-radius: 30px;
                border-color: #c7c7c7;
                letter-spacing: normal;
              "
              class="w-25"
              density="compact"
              height="45"
              variant="outlined"
              @click="$router.push({ name: 'home' })"
              >متابعة التسوق</v-btn
            >
          </v-card-actions>
        </v-col>
        <v-col cols="12" lg="8" v-if="cartItems.length">
          <v-table class="w-100">
            <thead class="bg-grey-lighten-4">
              <tr>
                <th style="font-size: 14px; font-weight: bold">المنتج</th>
                <th
                  style="font-size: 14px; font-weight: bold"
                  class="text-center"
                >
                  السعر
                </th>
                <th
                  style="font-size: 14px; font-weight: bold"
                  class="text-center"
                >
                  الكمية
                </th>
                <th
                  style="font-size: 14px; font-weight: bold"
                  class="text-center"
                >
                  الإجمالي
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <v-row dir="rtl" class="mb-5">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="7">
                      <v-card-title
                        class="px-0"
                        style="
                          font-size: 14px;
                          white-space: pre-wrap;
                          line-height: 1.2;
                        "
                      >
                        {{ item.title }} Sample - {{ item.category }}
                      </v-card-title>
                      <v-card-text class="px-0 pb-0" style="color: #5f5f5f">
                        Category: {{ item.category }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </td>
                <td class="text-center" style="width: 15%">
                  <v-card-text
                    class="px-0 pt-2"
                    style="color: #3a3a3a; font-weight: bold"
                  >
                    EGP
                    {{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </v-card-text>
                </td>
                <td class="text-center" style="width: 15%">
                  <div
                    class="counter px-1"
                    style="
                      border-radius: 30px;
                      border: 1px solid #aaaaaa;
                      width: fit-content;
                    "
                  >
                    <v-icon
                      size="19"
                      color="#434343"
                      @click="item.quantity > 1 ? item.quantity-- : false"
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      id="quantity-counter"
                      class="text-center py-2"
                      style="
                        border: none;
                        outline: none;
                        width: 35px;
                        font-size: 12px;
                        color: #434343;
                      "
                      min="1"
                      v-model="item.quantity"
                    />
                    <v-icon size="19" color="#434343" @click="item.quantity++"
                      >mdi-plus</v-icon
                    >
                  </div>
                </td>
                <td class="text-center" style="width: 15%">
                  <v-card-text
                    class="px-0 pt-2"
                    style="color: #3a3a3a; font-weight: bold"
                    >EGP
                    {{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      ) * item.quantity
                    }}
                  </v-card-text>
                </td>
                <td>
                  <v-icon
                    color="#3a3a3a"
                    size="22"
                    @click="deleteProduct(item.id)"
                    >mdi-delete</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-divider length="100%" color="black"></v-divider>
          <v-card-text
            class="px-0 pt-2 mt-5 d-flex align-center"
            style="gap: 10px"
            v-if="cartItems.length"
            ><v-icon color="#2a2a2a" size="22">mdi-shield-check</v-icon>
            <span style="color: #5f5f5f">ضمان التسوق الآمن</span>
          </v-card-text>
          <img src="../assets/images/cart-page-cards.webp" alt="" width="280" />
        </v-col>
        <v-col cols="12" lg="4" class="mt-8 mt-lg-0" v-if="cartItems.length">
          <v-card elevation="0">
            <v-card-title style="font-size: 16px; font-weight: bold">
              ملخص الطلب
            </v-card-title>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex justify-space-between align-center">
              <span>الإجمالي</span>
              <span style="font-size: 15px; font-weight: bold"
                >EGP {{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text> تقدير قيمة الشحن </v-card-text>
            <v-select
              name=""
              id=""
              :items="governorate"
              label="المحافظة"
              variant="outlined"
              rounded="pill"
              class="py-0 px-0 text-center"
              style="width: 100%"
              reverse
            >
            </v-select>
            <div
              class="states d-flex justify-center align-center"
              style="gap: 10px"
            >
              <v-select
                name=""
                id=""
                :items="region"
                label="المنطقة"
                variant="outlined"
                rounded="pill"
                class="py-0 px-0 text-center"
                style="width: 55%"
                focused="#ee7300"
                reverse
              >
              </v-select>
              <v-text-field
                label="الرمز البريدي"
                class="py-0 px-0 text-center"
                :rules="rules"
                style="width: 45%"
                variant="outlined"
                rounded="pill"
                reverse
              />
            </div>
            <v-card-actions class="px-0 my-4">
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 30px;
                  letter-spacing: normal;
                "
                variant="elevated"
                elevation="1"
                density="compact"
                height="45"
                class="w-100"
                color="#1e9ad1"
                >حساب قيمة الشحن</v-btn
              >
            </v-card-actions>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex justify-space-between align-center">
              <span>الإجمالي الكلي</span>
              <span style="font-size: 15px; font-weight: bold"
                >EGP {{ calcTotalPrice }}</span
              >
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>

            <v-card-actions
              class="px-0 my-4 flex-column justify-center align-center"
              style="gap: 15px"
            >
              <v-btn
                style="
                  text-transform: none;
                  border-color: #c7c7c7;
                  letter-spacing: normal;
                "
                variant="outlined"
                density="compact"
                height="45"
                class="w-100 mx-0"
                color="#1e9ad1"
                @click="toCheckOut"
                >الانتقال للدفع</v-btn
              >
              <v-btn
                style="text-transform: none; letter-spacing: normal"
                variant="elevated"
                elevation="1"
                density="compact"
                height="45"
                class="w-100 mx-0"
                color="#1e9ad1"
                @click="toCartPage"
                >متابعة التسوق</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { cartModule } from "@/stores/Cart";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
const cartStore = cartModule();
const { cartItems } = storeToRefs(cartStore);
const getProducts = cartStore.getCartItems;
const deleteProduct = cartStore.deleteItem;
const setProducts = cartStore.setTOLocalStorage;
const governorate = ref(["Asyut", "Cairo", "Alexandria", "Sohag", "Giza"]);
const region = ref(["Alwelidia", "Ramsees", "Somoha", "Tahta", "Embaba"]);

const rules = ref([
  (value) => !!value || "ادخل الرمز البريدي",
  (value) => (value && value.length >= 3) || "على الأقل 3 عناصر",
]);

const calcTotalPrice = computed(() => {
  let total = 0;
  cartItems.value.forEach((product) => {
    total +=
      Math.ceil(
        product.price - product.price * (product.discountPercentage / 100)
      ) * product.quantity;
  });
  return total;
});

const toCartPage = () => {
  setProducts();
  router.push({ name: "home" });
};

const toCheckOut = () => {
  setProducts();
  router.push({ name: "check_out" });
};

onMounted(() => {
  getProducts();
});
</script>

<style lang="scss">
@media (max-width: 842px) {
  .cart-page {
    table {
      width: 810px !important;
    }
  }
}
</style>
