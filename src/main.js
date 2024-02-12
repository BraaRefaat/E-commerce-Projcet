import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Pinia
import { createPinia } from "pinia";
// vue3-particles
import Particles from "vue3-particles";

// vueDatePicker
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Emitter
import mitt from "mitt";
const Emitter = mitt();

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .component("VueDatePicker", VueDatePicker)
  .use(Particles)
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
