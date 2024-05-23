<template>
  <div class="update-banners">
    <div
      class="parent mb-10 mx-10 d-flex flex-column align-center justify-center ga-10"
    >
      <div class="add-carousel-item-btn">
        <v-btn
          variant="elevated"
          style="
            letter-spacing: normal;
            font-size: 20px;
            color: #023047;
            height: 60px;
          "
          color="#8BCDEE"
          @click="addCarouselItem"
        >
          <v-icon size="33" color="#023047" class="mr-2"
            >mdi-plus-box-multiple</v-icon
          >
          إضافة لافتة جديدة
        </v-btn>
      </div>
      <v-carousel
        hide-delimiters
        mandatory="force"
        show-arrows="hover"
        touch
        class="rounded-xl"
      >
        <template v-slot:prev="{ props }">
          <v-btn variant="elevated" color="#8BCDEE" v-bind="props"
            ><v-icon size="30">mdi-chevron-left</v-icon></v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="elevated" color="#8BCDEE" v-bind="props"
            ><v-icon size="30">mdi-chevron-right</v-icon></v-btn
          >
        </template>
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <div class="img-parent">
            <img :src="image" alt="" />
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
              <v-tooltip activator="parent" location="bottom center">
                إضافة صورة
              </v-tooltip>
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
              <v-tooltip activator="parent" location="bottom center">
                حذف الصورة
              </v-tooltip>
              <v-icon size="33">mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-snackbar
      v-model="snackbar.Value"
      color="#007226"
      timeout="4000"
      style="letter-spacing: normal"
      location="right bottom"
    >
      <v-btn
        @click="snackbar.Value = false"
        variant="text"
        style="border-radius: 30px"
        ><v-icon size="27">mdi-close-box-multiple</v-icon></v-btn
      >
      <span>{{ snackbar.text }}</span>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([""]); // Initialize with one empty string for the first item
const fileInputs = ref([]);

const snackbar = ref({
  Value: false,
  text: "",
});

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
  images.value.splice(index, 1);
};

const addCarouselItem = () => {
  images.value.push("");
  snackbar.value.Value = true;
  snackbar.value.text = "تم إضافة لافتة جديدة";
};

// Ensure the fileInputs array has the correct length
onMounted(() => {
  fileInputs.value = images.value.map(() => null);
});
</script>

<style scoped lang="scss">
.update-banners {
  .parent {
    .v-carousel {
      height: min-content !important;
      border: #023047 2px solid;
    }
    .v-carousel-item {
      min-height: 500px;
      .img-parent {
        position: relative;
        min-height: 500px;
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
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

.v-snackbar__content {
  position: relative;
  span {
    position: absolute;
    right: 30px;
    top: 20px;
    font-size: 18px !important;
    font-family: tahoma;
  }
}
</style>
