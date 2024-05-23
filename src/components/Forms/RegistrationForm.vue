<template>
  <form
    class="px-8 py-6 text-center"
    style="background-color: #1e9ad1; border-radius: 10px"
    dir="rtl"
  >
    <v-container class="mb-6">
      <v-row dir="rtl">
        <v-col cols="12">
          <div class="form-title mb-6">
            <v-icon size="80" color="#023047">mdi-account-plus</v-icon>
            <h2 style="color: #023047; font-size: 27px">حساب جديد</h2>
          </div>
        </v-col>
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <v-text-field
                  dir="rtl"
                  append-inner-icon="mdi-account"
                  label="الاسم"
                  variant="solo"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <v-text-field
                  dir="rtl"
                  append-inner-icon="mdi-phone"
                  label="رقم الهاتف"
                  variant="solo"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  dir="rtl"
                  append-inner-icon="mdi-email-outline"
                  label="البريد الإلكتروني"
                  variant="solo"
                  class="mb-2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center align-center">
                <VueDatePicker
                  v-model="date"
                  position="center"
                  :action-row="{ showNow: true }"
                  now-button-label="اليوم"
                  select-text="اختيار"
                  cancel-text="إلغاء"
                  placeholder="تاريخ الميلاد"
                  :enable-time-picker="false"
                >
                  <template #input-icon>
                    <v-icon class="input-slot-image">mdi-calendar-month</v-icon>
                  </template>
                </VueDatePicker>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="4"></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-container>

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn> clear </v-btn>
  </form>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<style lang="scss">
.v-field__field {
  .v-field__input {
    font-size: 14px;
  }
}
.dp__input {
  height: 60px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  padding-right: 52px !important;
}
.input-slot-image {
  width: auto;
  padding-right: 12px;
}

@media (max-width: 600px) {
  form {
    width: 80% !important;
  }
}
@media (min-width: 600px) {
  form {
    width: 60% !important;
  }
}
@media (min-width: 960px) {
  form {
    width: 60% !important;
  }
}
@media (min-width: 1280px) {
  form {
    width: 35% !important;
  }
}
@media (min-width: 1280px) {
  form {
    width: 35% !important;
  }
}
</style>
