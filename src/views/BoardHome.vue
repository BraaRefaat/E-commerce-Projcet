<template>
  <div class="board-home">
    <v-container>
      <v-row dir="rtl" class="d-flex align-center justify-center">
        <v-col cols="5">
          <v-card elevation="5" class="board-card rounded-xl">
            <v-container>
              <v-row dir="rtl">
                <v-col cols="4" class="d-flex justify-center align-center">
                  <v-icon size="80" color="#023047">mdi-shape-outline</v-icon>
                </v-col>
                <v-col
                  cols="8"
                  class="d-flex align-center justify-center flex-column"
                  style="gap: 10px"
                >
                  <p>التصنيفات</p>
                  <p>40</p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
          <v-card elevation="5" class="board-card rounded-xl">
            <v-container>
              <v-row dir="rtl">
                <v-col cols="4" class="d-flex justify-center align-center">
                  <v-icon size="80" color="#023047"
                    >mdi-package-variant-closed</v-icon
                  >
                </v-col>
                <v-col
                  cols="8"
                  class="d-flex align-center justify-center flex-column"
                  style="gap: 10px"
                >
                  <p>المنتجات</p>
                  <p>345</p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card elevation="4" color="#8ecae6" class="rounded-xl">
            <v-container>
              <v-row dir="rtl">
                <v-col cols="8" class="d-flex align-center justify-start">
                  <p style="font-size: 18px; color: #023047">المنتجات</p>
                </v-col>
                <v-col cols="4" class="d-flex justify-end align-center">
                  <v-icon size="30" color="#023047"
                    >mdi-package-variant-closed</v-icon
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-table class="rounded-xl" height="400px" fixed-header dir="rtl">
            <thead>
              <tr>
                <th>المنتج</th>
                <th>السعر</th>
                <th>العدد</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.count }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  style="background-color: #8ecae6"
                  class="rounded-be-lg"
                ></td>
                <td style="background-color: #8ecae6"></td>
                <td
                  style="background-color: #8ecae6"
                  class="rounded-bs-lg"
                ></td>
              </tr>
            </tfoot>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const products = ref([
  {
    name: "ثلاجة فريش",
    price: 500,
    count: 30,
  },
  {
    name: "موبايل ايفون",
    price: 200,
    count: 50,
  },
  {
    name: "خلاط موليكس",
    price: 150,
    count: 80,
  },
  {
    name: "شاشة تورنيدو 50 بوصة",
    price: 400,
    count: 40,
  },
  {
    name: "مروحة توشيبا 18 بوصة",
    price: 230,
    count: 70,
  },
  {
    name: "مروحة توشيبا 18 بوصة",
    price: 230,
    count: 70,
  },
  {
    name: "مروحة توشيبا 18 بوصة",
    price: 230,
    count: 70,
  },
  {
    name: "مروحة توشيبا 18 بوصة",
    price: 230,
    count: 70,
  },
  {
    name: "مروحة توشيبا 18 بوصة",
    price: 230,
    count: 70,
  },
  {
    name: "مروحة توشيبا 18 بوصة",
    price: 230,
    count: 70,
  },
]);
</script>

<style lang="scss">
.board-home {
  .board-card {
    transition: 0.4s all ease-in-out;
    outline: 2px solid transparent;
    &:hover {
      transform: rotate(-3deg);
      outline: 2px solid #1e9ad1;
    }
  }
  p {
    font-size: 22px;
    font-weight: 600;
    color: #023047;
  }
  th {
    background: #8ecae6 !important;
    color: #023047 !important;
    font-size: 17px;
    font-weight: 600 !important;
  }
  th,
  td {
    text-align: center !important;
  }
}
</style>
