<template>
  <div class="features">
    <v-container>
      <v-row dir="rtl">
        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="parent d-flex align-center justify-center flex-column flex-sm-row"
          >
            <v-icon class="ml-3 mb-3 mb-sm-0">mdi-truck-fast</v-icon>
            <span style="letter-spacing: normal">الشحن والإرجاع مجاني</span>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="parent second d-flex align-center justify-center flex-column flex-sm-row"
          >
            <v-icon class="ml-3 mb-3 mb-sm-0">mdi-seal</v-icon>
            <span style="letter-spacing: normal">ضمان أقل الأسعار</span>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="parent d-flex align-center justify-center flex-column flex-sm-row"
          >
            <v-icon class="ml-3 mb-3 mb-sm-0">mdi-trophy</v-icon>
            <span style="letter-spacing: normal">أطول عروض الضمانات</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.features {
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: rgb(160, 160, 160);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 84%;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: rgb(160, 160, 160);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 84%;
    }
  }
}

// media query
@media (max-width: 600px) {
  .features {
    .second {
      &::before,
      &::after {
        display: none;
      }
    }
  }
}

@media (max-width: 960px) {
  .features {
    .second {
      &::before {
        display: none;
      }
    }
  }
}
</style>
