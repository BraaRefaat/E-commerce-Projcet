<template>
  <div class="banner">
    <div class="parent">
      <v-carousel
        hide-delimiters
        cycle
        mandatory
        show-arrows="hover"
        touch
        interval="5000"
      >
        <template v-slot:prev="{ props }">
          <v-btn variant="elevated" color="#8BCDEE" v-bind="props"
            ><v-icon size="30">mdi-chevron-left</v-icon></v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="elevated" color="#8BCDEE" v-bind="props"
            ><v-icon size="30">mdi-chevron-right</v-icon></v-btn
          >
        </template>
        <v-carousel-item>
          <img src="../../assets/images/elrehab-banner.jpg" alt=""
        /></v-carousel-item>
        <v-carousel-item>
          <img src="../../assets/images/elrehab-banner2.jpg" alt="" />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  .parent {
    .v-carousel {
      height: min-content !important;
    }
    .v-carousel-item {
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
