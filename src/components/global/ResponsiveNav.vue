<template>
  <div class="res-nav">
    <v-app-bar color="#F9F4D9" height="85">
      <v-container fluid>
        <v-row dir="rtl" class="align-center">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon
              color="#ee7300"
              variant="flat"
              @click="openMenu"
            ></v-app-bar-nav-icon>
            <v-btn
              color="#ee7300"
              variant="text"
              size="50"
              style="border-radius: 50%"
              class="mr-7"
            >
              <v-icon color="#ee7300" class="" size="26">mdi-magnify</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center align-center">
            <img
              src="../../assets/images/logo2.png"
              style="width: 60px"
              @click="$router.push({ name: 'home' })"
              alt=""
            />
          </v-col>
          <v-col cols="4" class="d-flex justify-end">
            <div class="account">
              <v-btn :ripple="false" size="50" style="border-radius: 50%">
                <v-icon color="#ee7300" size="27">mdi-account-outline</v-icon>
              </v-btn>
            </div>
            <div class="cart d-flex flex-column align-center mr-7">
              <v-badge
                location="center left"
                :content="cartItems.length"
                v-if="cartItems.length"
                offset-x="-12"
                color="#9F6025"
                style="z-index: 999"
              ></v-badge>
              <v-btn
                size="50"
                style="border-radius: 50%"
                :ripple="false"
                :style="`pointer-events: ${
                  $route.name == 'cart_page' ? 'none' : 'unset'
                }`"
                @click="openCart"
              >
                <v-icon color="#ee7300" size="27">mdi-cart-outline</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import { cartModule } from "@/stores/Cart";
import { storeToRefs } from "pinia";
import { inject } from "vue";
const Emitter = inject("Emitter");
const openCart = () => {
  Emitter.emit("openCart");
};
const openMenu = () => {
  Emitter.emit("openMenu");
};
const cartStore = cartModule();
const { cartItems } = storeToRefs(cartStore);
</script>

<style lang="scss" scoped>
img {
  transform: scale(1.4);
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
}
</style>
