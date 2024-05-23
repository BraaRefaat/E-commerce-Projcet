<template>
  <div class="board-nav">
    <v-app-bar color="#8ECAE6" height="fit-content" class="position-fixed">
      <v-container>
        <v-row dir="rtl">
          <v-col cols="6" class="d-flex align-center">
            <v-toolbar-title
              style="color: #023047; font-size: 25px; font-weight: 700"
              class="d-flex align-center justify-start"
              >لوحة التحكم</v-toolbar-title
            >
          </v-col>
          <v-col
            :cols="$route.path == '/dash-board/products' ? 6 : 1"
            :style="`display: ${
              $route.path == '/dash-board/products' ? 'flex' : 'none'
            } !important;`"
            class="d-flex align-center justify-end"
          >
            <v-tooltip text="إضافة منتج جديد" location="bottom right">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="#25933D"
                  variant="flat"
                  rounded="xl"
                  v-bind="props"
                  v-show="$route.path == '/dash-board/products'"
                  to="/dash-board/add-product"
                >
                  <v-icon size="24">mdi-plus</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </v-col>
          <v-col
            :cols="$route.path == '/dash-board/categories' ? 6 : 1"
            :style="`display: ${
              $route.path == '/dash-board/categories' ? 'flex' : 'none'
            } !important;`"
            class="d-flex align-center justify-end"
          >
            <v-tooltip text="إضافة تصنيف جديد" location="bottom right">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="#25933D"
                  variant="flat"
                  rounded="xl"
                  v-bind="props"
                  v-show="$route.path == '/dash-board/categories'"
                  to="/dash-board/add-category"
                >
                  <v-icon size="24">mdi-plus</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script setup></script>
<style lang="scss">
.board-nav {
  img {
    transform: scale(1.2);
    transition: 0.3s;
    &:hover {
      transform: scale(1.3);
      cursor: pointer;
    }
  }
}
</style>
