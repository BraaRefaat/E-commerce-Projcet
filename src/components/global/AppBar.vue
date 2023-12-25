<template>
  <div class="nav-bar">
    <v-app-bar color="#F9F4D9" height="fit-content" absolute>
      <v-container>
        <v-row dir="rtl">
          <v-col cols="2">
            <img
              src="@/assets/images/logo2.png"
              alt="Logo"
              style="width: 90px"
              @click="$router.push({ name: 'home' })"
            />
          </v-col>
          <v-col
            cols="6"
            class="d-flex justify-center align-center position-relative"
          >
            <input
              type="search"
              name="navSearch"
              id="navSearch"
              placeholder="البحث في المتجر"
              class="py-2 px-5 bg-white"
            />
            <v-btn
              style="
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 30px;
              "
            >
              <v-icon color="black" size="27">mdi-magnify</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="3" class="d-flex justify-space-between align-center">
            <div class="wishlist d-flex flex-column align-center">
              <v-btn :ripple="false">
                <v-icon color="#ee7300" size="27">mdi-heart-outline</v-icon>
                <v-tooltip activator="parent" location="bottom center"
                  >المفضلة</v-tooltip
                >
              </v-btn>
            </div>
            <div class="account d-flex flex-column align-center">
              <v-btn :ripple="false">
                <v-icon color="#ee7300" size="27">mdi-account-outline</v-icon>
                <v-tooltip activator="parent" location="bottom center"
                  >الحساب</v-tooltip
                >
              </v-btn>
            </div>
            <div class="cart d-flex flex-column align-center">
              <v-badge
                location="top left"
                :content="cartItems.length"
                offset-x="-14"
                color="#9F6025"
                style="z-index: 999"
                v-if="cartItems.length"
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
          <v-col cols="7" dir="rtl" style="max-width: none">
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
          <v-col cols="3"></v-col>
          <v-col cols="2">
            <div class="help">
              <v-btn>
                <v-icon size="27">mdi-face-agent</v-icon>
                <span class="mx-1">الدعم فني</span>
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
  transform: scale(1.3);
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
}
input {
  width: 100%;
  border-radius: 30px;
  border: #2a2a2a 1px solid;
  outline: none;
  &:focus {
    border: #ee7300 2px solid;
  }
}
li {
  a {
    color: #2a2a2a;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    list-style: none;
    display: inline-block;
    text-decoration: none;
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
