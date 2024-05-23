<template>
  <div class="change-offers py-7 pb-10">
    <v-container fluid>
      <v-row class="d-flex align-center justify-center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="px-3 pr-lg-6"
          style="height: 290px"
          v-for="(image, index) in images"
          :key="index"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="
                overflow: hidden;
                height: 100%;
                border-radius: 7px;
                border: 2px solid #023047;
              "
            >
              <img
                :src="image"
                :style="`width: 100%; background-color: #8ECAE6; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out;scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
              <div class="overlay"></div>
              <v-btn
                variant="outlined"
                color="#023047"
                density="compact"
                width="60"
                height="60"
                class="add-btn"
                @click="triggerFileInput(index)"
              >
                <v-tooltip activator="parent" location="bottom center"
                  >إضافة صورة</v-tooltip
                >
                <v-icon size="33">mdi-plus</v-icon>
              </v-btn>
              <input
                type="file"
                :ref="setFileInputRef(index)"
                accept="image/png, image/jpeg, image/bmp"
                style="display: none"
                @change="handleFileChange($event, index)"
              />
              <v-btn
                variant="outlined"
                color="#023047"
                density="compact"
                width="60"
                height="60"
                class="delete-btn"
                @click="deleteImage(index)"
              >
                <v-tooltip activator="parent" location="bottom center"
                  >حذف الصورة</v-tooltip
                >
                <v-icon size="33">mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const images = ref(["", "", "", "", ""]); // Array to store image URLs
const fileInputs = ref([]);

// Function to set the ref for each file input dynamically
const setFileInputRef = (index) => (el) => {
  fileInputs.value[index] = el;
};

const triggerFileInput = (index) => {
  if (fileInputs.value[index]) {
    fileInputs.value[index].click();
  }
};

const handleFileChange = (event, index) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value[index] = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const deleteImage = (index) => {
  images.value[index] = "";
};

// Ensure the fileInputs array has the correct length
onMounted(() => {
  fileInputs.value = images.value.map(() => null);
});
</script>

<style lang="scss">
.change-offers {
  .parent {
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #1e9ad6;
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
        background-color: #023047 !important;
        .v-icon {
          color: #1e9ad6;
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
        background-color: #023047 !important;
        .v-icon {
          color: #1e9ad6;
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
}
</style>
