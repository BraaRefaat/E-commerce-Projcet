<template>
  <div class="fix-nav">
    <v-app-bar color="#F9F4D9" height="100">
      <v-container fluid>
        <v-row dir="rtl">
          <v-col cols="2">
            <img
              class="w-50"
              src="../../assets/images/logo2.png"
              @click="$router.push({ name: 'home' })"
              alt=""
            />
          </v-col>
          <v-col cols="6" class="my-auto">
            <ul
              class="links d-flex justify-space-between align-center"
              style="list-style: none"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    query: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col
            cols="4"
            class="d-flex justify-end align-center"
            style="gap: 20px"
          >
            <v-btn>
              <v-icon size="27" color="#ee7300">mdi-magnify</v-icon>
              <v-tooltip activator="parent" location="bottom center"
                >بحث</v-tooltip
              >
            </v-btn>
            <div class="cart d-flex flex-column align-center">
              <v-badge
                location="top left"
                :content="cartItems.length"
                v-if="cartItems.length"
                offset-x="-14"
                color="#9F6025"
                style="z-index: 999"
              ></v-badge>
              <v-btn
                :ripple="false"
                :style="`pointer-events: ${
                  $route.name == 'cart_page' ? 'none' : 'unset'
                }`"
                @click="openCart"
              >
                <v-icon color="#ee7300" size="27">mdi-cart-outline</v-icon>
                <v-tooltip activator="parent" location="bottom center"
                  >عربة التسوق</v-tooltip
                >
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import { productsModule } from "@/stores/products";
import { cartModule } from "@/stores/Cart";
import { storeToRefs } from "pinia";
import { inject } from "vue";
const Emitter = inject("Emitter");
const openCart = () => {
  Emitter.emit("openCart");
};
const productStore = productsModule();
const { categories } = storeToRefs(productStore);
const cartStore = cartModule();
const { cartItems } = storeToRefs(cartStore);
</script>

<style scoped lang="scss">
img {
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
}
li {
  a {
    color: #2a2a2a;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    list-style: none;
    text-decoration: none;
    display: inline-block;
    position: relative;
    &::after {
      content: "";
      height: 3px;
      width: 0%;
      background: #ee7300;
      position: absolute;
      right: 0;
      bottom: -10px;
      transition: 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
  }
}
</style>
