<template>
  <div class="board-drawer">
    <v-navigation-drawer
      location="right"
      dir="rtl"
      color="#023047"
      class="position-fixed"
    >
      <v-list>
        <v-list-item
          prepend-icon="mdi-account-circle"
          subtitle="المدير التنفيذي"
          title="أسامة ثابت"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="الصفحة الرئيسية"
          value="home"
          to="/dash-board/home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-view-carousel-outline"
          title="لافتات الصفحة الرئيسية"
          value="offers"
          to="/dash-board/new-banners"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-sale"
          title="العروض المميزة"
          value="offers"
          to="/dash-board/new-offers"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-shape-outline"
          title="التصنيفات"
          value="categories"
          to="/dash-board/categories"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-package-variant"
          title="المنتجات"
          value="products"
          to="/dash-board/products"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.board-drawer {
  .v-list-item {
    color: #8ecae6;
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
