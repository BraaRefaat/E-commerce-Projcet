<template>
  <div class="categories-form">
    <v-container>
      <v-row>
        <v-col cols="12">
          <form
            class="px-8 py-6 text-center"
            style="background-color: #1e9ad1; border-radius: 10px"
            dir="rtl"
          >
            <div class="form-title mb-6">
              <v-icon size="80" color="#023047">mdi-account-circle</v-icon>
              <h2 style="color: #023047; font-size: 27px">تسجيل الدخول</h2>
            </div>
            <v-text-field
              :counter="10"
              dir="rtl"
              append-inner-icon="mdi-account"
              placeholder="الاسم"
              variant="solo"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              :counter="7"
              dir="rtl"
              append-inner-icon="mdi-phone"
              placeholder="رقم الهاتف"
              variant="solo"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              dir="rtl"
              append-inner-icon="mdi-email-outline"
              placeholder="البريد الإلكتروني"
              variant="solo"
              class="mb-2"
            ></v-text-field>

            <v-btn class="me-4" type="submit"> submit </v-btn>

            <v-btn> clear </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>
