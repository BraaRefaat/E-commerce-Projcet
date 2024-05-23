<template>
  <div class="add-category">
    <v-container>
      <v-row class="d-flex justify-center align-center" dir="rtl">
        <v-col cols="7">
          <form
            class="px-8 py-6 text-center"
            style="
              background-color: #1e9ad1;
              border-radius: 10px;
              box-shadow: 0 4px 8px 0 rgba(2, 48, 71, 0.3),
                0 6px 20px 0 rgba(2, 48, 71, 0.2);
            "
            dir="rtl"
          >
            <div class="form-title mb-6">
              <v-icon size="80" color="#023047">mdi-package-variant</v-icon>
              <h2 style="color: #023047; font-size: 27px">إضافة منتج جديد</h2>
            </div>

            <div class="image-input" dir="rtl">
              <v-file-input
                clearable
                chips
                multiple
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                label="صور المنتج"
                dir="rtl"
                append-inner-icon="mdi-image"
                variant="solo"
                class="mb-2"
              ></v-file-input>
            </div>
            <v-text-field
              dir="rtl"
              append-inner-icon="mdi-package-variant-closed"
              label="المنتج"
              variant="solo"
              class="mb-2"
            ></v-text-field>

            <v-textarea
              clearable
              dir="rtl"
              append-inner-icon="mdi-table-of-contents"
              label="وصف المنتج"
              variant="solo"
              class="mb-2"
            ></v-textarea>

            <v-text-field
              dir="rtl"
              append-inner-icon="mdi-cash"
              label="السعر"
              type="number"
              variant="solo"
              class="mb-2"
            ></v-text-field>

            <v-btn class="me-4" type="submit" style="letter-spacing: normal">
              إضافة
            </v-btn>

            <v-btn style="letter-spacing: normal"> مسح المدخلات </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rules = ref([
  (value) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      "Image size should be less than 2 MB!"
    );
  },
]);
</script>

<style lang="scss">
.v-input__prepend {
  display: none;
}
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
