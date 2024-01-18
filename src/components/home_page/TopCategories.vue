<template>
  <div class="top-categories" dir="rtl">
    <div class="napoli-banner">
      <img
        src="../../assets/images/elrehab-mid-banner.jpg"
        class="w-100"
        style="height: 400px"
        alt=""
      />
    </div>
    <div class="categories pt-13">
      <div class="title d-flex justify-center align-center px-5 mb-3">
        <h2
          class="text-center flex-grow-1"
          style="font-weight: 900; color: #023047"
        >
          تصنيفات مميزة
        </h2>
      </div>
      <v-container fluid>
        <v-row>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="category in categories"
            :key="category.title"
          >
            <v-card elevation="0" class="py-3 px-3">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  style="
                    width: 100%;
                    height: 165px;
                    overflow: hidden;
                    border-radius: 50%;
                    background-color: #8ecae6;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <img
                    v-bind="props"
                    :src="require(`@/assets/images/${category.image}`)"
                    :style="`
                    border-radius: 50%;
                    width: 80%;
                    height: 100%;
                    cursor: pointer;
                    transition: 0.4s all ease-in-out;
                    scale: ${isHovering ? 1.05 : 1}
                    `"
                    alt=""
                  />
                </div>
              </v-hover>
              <v-card-text class="text-center">{{
                category.title
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const categories = ref([
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
  {
    title: "التكييفات",
    image: "Modern-air-conditioning-PNG-1-removebg-preview.png",
  },
]);
</script>
