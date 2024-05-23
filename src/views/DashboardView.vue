<template>
  <div class="dashboard-view">
    <BoardDrawer />
    <BoardNav
      v-show="
        $route.name == 'dash_board' ||
        $route.path == '/dash-board/home' ||
        $route.path == '/dash-board/products' ||
        $route.path == '/dash-board/categories' ||
        $route.path == '/dash-board/add-category' ||
        $route.path == '/dash-board/add-product' ||
        $route.path == '/dash-board/new-offers' ||
        $route.path == '/dash-board/new-banners'
      "
    />
    <router-view></router-view>
  </div>
</template>

<script setup>
import BoardNav from "@/components/dashboard/BoardLayout/BoardNav.vue";
import BoardDrawer from "@/components/dashboard/BoardLayout/BoardDrawer.vue";
</script>
