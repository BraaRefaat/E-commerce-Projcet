<template>
  <form
    @submit.prevent="submit"
    class="px-8 py-6 text-center"
    style="background-color: #1e9ad1; border-radius: 10px"
    dir="rtl"
  >
    <div class="form-title mb-6">
      <v-icon size="80" color="#023047">mdi-account-circle</v-icon>
      <h2 style="color: #023047; font-size: 27px">تسجيل الدخول</h2>
    </div>
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      dir="rtl"
      append-inner-icon="mdi-account"
      label="الاسم"
      variant="solo"
      class="mb-2"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      dir="rtl"
      append-inner-icon="mdi-phone"
      label="رقم الهاتف"
      variant="solo"
      class="mb-2"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      dir="rtl"
      append-inner-icon="mdi-email-outline"
      label="البريد الإلكتروني"
      variant="solo"
      class="mb-2"
    ></v-text-field>

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn @click="handleReset"> clear </v-btn>
  </form>
</template>

<script setup>
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;

      return "Select an item.";
    },
    checkbox(value) {
      if (value === "1") return true;

      return "Must be checked.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style lang="scss">
.v-field__field {
  display: flex;
  align-items: center;
  justify-content: right;
  .v-field__input {
    display: flex;
    align-items: center;
    justify-content: right;
  }
}
</style>
