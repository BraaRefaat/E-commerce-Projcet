<template>
  <div class="quality-features py-13 bg-grey-lighten-3">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="card in cards"
          :key="card.title"
          class="px-5"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="text-center d-flex justify-center align-center px-4"
              height="350"
              :elevation="isHovering ? 2 : 0"
              :color="isHovering ? `#023047` : `#fff`"
            >
              <div class="parent">
                <span
                  ><v-icon size="70" color="#FB8500">{{
                    card.icon
                  }}</v-icon></span
                >
                <v-card-title style="font-weight: 700">{{
                  card.title
                }}</v-card-title>
                <v-card-text>{{ card.description }}</v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "الجودة والادخار",
    description: "مراقبة الجودة الشاملة وبأسعار مقبولة",
    icon: "mdi-star-half-full",
  },
  {
    title: "الشحن السريع",
    description: "توصيل سريع ومريح من الباب إلى الباب",
    icon: "mdi-truck-fast",
  },
  {
    title: "دفع آمن",
    description: "أكثر من 10 طرق دفع آمنة مختلفة",
    icon: "mdi-shield-half-full",
  },
  {
    title: "لديك اسئلة؟",
    description: "خدمة العملاء على مدار 24/7 -نحن هنا وسعداء بالمساعدة!",
    icon: "mdi-help-circle",
  },
];
</script>
