<template>
  <div class="top-offers bg-grey-lighten-3 py-7 pb-10">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          md="4"
          lg="4"
          class="px-3 pr-lg-6"
          style="height: 290px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="../../assets/images/elrehab-offer1.jpg"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out;scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          md="4"
          lg="4"
          class="px-3 pr-lg-6"
          style="height: 290px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="../../assets/images/elrehab-offer2.jpg"
                :style="`width: 100%; height: 100%; cursor: pointer;transition: 0.5s all ease-in-out;scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4" style="height: 290px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent text-center"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="../../assets/images/elrehab-offer3.jpg"
                :style="`width: 100%; height: 100%; cursor: pointer;transition: 0.5s all ease-in-out;scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-row class="mt-5">
          <v-col cols="12" sm="6" class="pl-6 pr-6 pr-lg-6 pl-lg-6">
            <v-hover v-slot="{ isHovering, props }">
              <div
                class="parent"
                v-bind="props"
                style="overflow: hidden; height: 100%; border-radius: 7px"
              >
                <img
                  src="../../assets/images/elrehab-offer6.jpg"
                  :style="`width: 100%; height: 100%; cursor: pointer;transition: 0.5s all ease-in-out;scale: ${
                    isHovering ? 1.1 : 1
                  }`"
                />
              </div>
            </v-hover>
          </v-col>
          <v-col cols="12" sm="6" class="pl-6 pr-6">
            <v-hover v-slot="{ isHovering, props }">
              <div
                class="parent"
                v-bind="props"
                style="overflow: hidden; height: 100%; border-radius: 7px"
              >
                <img
                  src="../../assets/images/elrehab-offer5.jpg"
                  :style="`width: 100%; height: 100%; cursor: pointer;transition: 0.5s all ease-in-out;scale: ${
                    isHovering ? 1.1 : 1
                  }`"
                />
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>
