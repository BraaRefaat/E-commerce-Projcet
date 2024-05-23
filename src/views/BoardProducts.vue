<template>
  <div class="board-products">
    <v-container>
      <v-row>
        <v-col cols="3" v-for="num in 10" :key="num">
          <v-card
            elevation="5"
            class="d-flex align-center justify-center flex-column py-6 px-5 position-relative rounded-xl"
          >
            <img src="../assets//images/mobile-cat.png" width="105" alt="" />
            <v-card-title> Iphone 12 pro max </v-card-title>
            <v-card-subtitle>Phones</v-card-subtitle>
            <div class="edit-btn">
              <v-tooltip text="تعديل المنتج" location="top center">
                <template v-slot:activator="{ props }">
                  <v-btn
                    variant="text"
                    v-bind="props"
                    class="position-absolute rounded-bs-xl"
                    style="top: 0; right: 0"
                    color="#1e9ad1"
                  >
                    <v-icon size="23">mdi-pencil</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
            <div class="delete-btn">
              <v-tooltip text="حذف المنتج" location="top center">
                <template v-slot:activator="{ props }">
                  <v-btn
                    variant="text"
                    v-bind="props"
                    class="position-absolute rounded-be-xl"
                    style="top: 0; left: 0"
                    color="#92140C"
                  >
                    <v-icon size="23">mdi-delete</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
