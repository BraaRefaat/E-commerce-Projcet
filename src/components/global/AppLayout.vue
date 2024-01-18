<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer v-if="$route.name != 'check_out'" />
      <MenuDrawer />
      <v-main
        :style="`margin-top: ${
          $route.name == 'check_out'
            ? '0'
            : $route.name == 'Login_Sign_in'
            ? '0'
            : windowWidth <= 1074
            ? '80px'
            : '160px'
        };`"
      >
        <slot></slot>
      </v-main>
      <AppBar
        v-show="
          $route.name != 'check_out' &&
          $route.name != 'Login_Sign_in' &&
          !showFixed &&
          windowWidth > 1074
        "
      />
      <ResponsiveNav
        v-show="
          $route.name != 'check_out' &&
          $route.name != 'Login_Sign_in' &&
          windowWidth <= 1074
        "
      />
      <FixedNav
        v-show="
          $route.name != 'check_out' &&
          $route.name != 'Login_Sign_in' &&
          showFixed &&
          windowWidth > 1074
        "
      />
      <AppFooter
        v-show="$route.name != 'check_out' && $route.name != 'Login_Sign_in'"
      />
    </v-layout>
  </div>
</template>

<script setup>
import AppBar from "@/components/global/AppBar.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
import ResponsiveNav from "@/components/global/ResponsiveNav.vue";
import MenuDrawer from "@/components/global/MenuDrawer.vue";
import { ref } from "vue";
import { onMounted } from "vue";
const showFixed = ref(false);
const windowWidth = ref(0);
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.onresize = () => {
    windowWidth.value = window.innerWidth;
  };
  window.onscroll = () => {
    if (window.scrollY >= 195) {
      showFixed.value = true;
    } else {
      showFixed.value = false;
    }
  };
});
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 2px;
  height: 100%;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb {
  width: 2px;
  background-color: #1e9ad1;
  border-radius: 30px;
}
::-webkit-scrollbar-track {
  width: 2px;
  background-color: transparent;
  border-radius: 30px;
}

.v-main {
  overflow-x: hidden;
  .quick-view {
    margin: 0 !important;
  }
}
</style>
