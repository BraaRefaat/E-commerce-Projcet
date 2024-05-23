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
              <v-icon size="80" color="#023047">mdi-shape-plus-outline</v-icon>
              <h2 style="color: #023047; font-size: 27px">إضافة تصنيف جديد</h2>
            </div>

            <div
              class="image-input mb-8 d-flex align-center justify-center"
              style="height: 300px"
              dir="rtl"
            >
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="parent"
                  v-bind="props"
                  style="
                    overflow: hidden;
                    height: 100%;
                    width: 60%;
                    border-radius: 50%;
                    border: 2px solid #023047;
                  "
                >
                  <img
                    :src="imageUrl"
                    :style="`width: 100%; background-color: #8ECAE6; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                      isHovering ? 1.1 : 1
                    }`"
                  />
                  <div class="overlay"></div>
                  <v-btn
                    variant="outlined"
                    color="#1e9ad6"
                    density="compact"
                    width="60"
                    height="60"
                    class="add-btn"
                    @click="triggerFileInput"
                  >
                    <v-tooltip activator="parent" location="bottom center">
                      إضافة صورة
                    </v-tooltip>
                    <v-icon size="33">mdi-plus</v-icon>
                  </v-btn>
                  <input
                    type="file"
                    :rules="rules"
                    ref="fileInput"
                    accept="image/png, image/jpeg, image/bmp"
                    style="display: none"
                    @change="handleFileChange"
                  />
                  <v-btn
                    variant="outlined"
                    color="#1e9ad6"
                    density="compact"
                    width="60"
                    height="60"
                    class="delete-btn"
                    @click="deleteImage"
                  >
                    <v-tooltip activator="parent" location="bottom center">
                      حذف الصورة
                    </v-tooltip>
                    <v-icon size="33">mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-hover>
            </div>
            <v-text-field
              dir="rtl"
              append-inner-icon="mdi-shape"
              label="التصنيف"
              variant="solo"
              class="mb-2"
            ></v-text-field>

            <v-btn class="mx-4" type="submit" style="letter-spacing: normal">
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

const imageUrl = ref("");
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const deleteImage = () => {
  imageUrl.value = ""; // Clear the image URL
};

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
.parent {
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #023047;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .add-btn {
    background-color: transparent !important;
    text-transform: none;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    letter-spacing: normal;
    font-size: 13px;
    border-radius: 7px;
    transition: 0.3s all ease-in-out;
    opacity: 0;
    &:hover {
      border-radius: 20px;
      background-color: #1e9ad6 !important;
      .v-icon {
        color: #023047;
      }
    }
  }
  .delete-btn {
    background-color: transparent !important;
    text-transform: none;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    letter-spacing: normal;
    font-size: 13px;
    border-radius: 7px;
    transition: 0.3s all ease-in-out;
    opacity: 0;
    &:hover {
      border-radius: 20px;
      background-color: #1e9ad6 !important;
      .v-icon {
        color: #023047;
      }
    }
  }
  &:hover {
    .add-btn,
    .delete-btn,
    .overlay {
      opacity: 1 !important;
    }
  }
}
</style>
