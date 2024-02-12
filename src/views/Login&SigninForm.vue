<template>
  <div>
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        autoPlay: true,
        background: {
          color: {
            value: '#023047',
          },
          opacity: 1,
        },
        clear: true,
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: false,
            },
            onDiv: {
              enable: false,
              type: 'circle',
            },
            onHover: {
              enable: false,
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
        },
        particles: {
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },
          color: {
            value: '#fff',
            animation: {
              h: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: true,
                offset: 0,
              },
              s: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: true,
                offset: 0,
              },
              l: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: true,
                offset: 0,
              },
            },
          },
          effect: {
            close: true,
            fill: true,
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: 'percent',
              radius: 0,
            },
            decay: 0,
            direction: 'bottom',
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                value: 0,
              },
              enable: false,
            },
            outModes: {
              default: 'out',
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: true,
            trail: {
              enable: false,
              length: 10,
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            limit: {
              mode: 'delete',
              value: 0,
            },
            value: 400,
          },
          reduceDuplicates: false,
          shape: {
            close: true,
            fill: true,
            type: 'circle',
          },
          size: {
            value: 10,
            animation: {
              count: 0,
              enable: false,
              speed: 5,
              decay: 0,
              delay: 0,
              sync: false,
              mode: 'auto',
              startValue: 'random',
              destroy: 'none',
            },
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            value: {
              min: 0,
              max: 100,
            },
            opacityRate: 10,
            sizeRate: 10,
            velocityRate: 10,
          },
          destroy: {
            mode: 'none',
            split: {
              count: 1,
              factor: {
                value: 3,
              },
              rate: {
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
            },
          },
          wobble: {
            distance: 10,
            enable: true,
            speed: {
              angle: 10,
              move: 10,
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        smooth: false,
        zLayers: 100,
        name: 'Snow',
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }"
    />
  </div>

  <v-container>
    <v-row>
      <v-col cols="12">
        <v-switch
          :label="selectedForm == true ? 'تسجيل الدخول' : 'حساب جديد'"
          falseIcon="mdi-login"
          trueIcon="mdi-account-plus"
          color="#1e9ad1"
          @click="selectedForm = !selectedForm"
          inset
        ></v-switch>
      </v-col>
    </v-row>
  </v-container>
  <div
    class="account-form d-flex flex-wrap justify-center align-center"
    style="height: 100vh; overflow-y: scroll"
  >
    <LoginForm v-show="selectedForm == true" />
    <RegistrationForm v-show="selectedForm == false" />
  </div>
</template>

<script setup>
import LoginForm from "@/components/Forms/LoginForm.vue";
import RegistrationForm from "@/components/Forms/RegistrationForm.vue";
import { ref } from "vue";
import { loadSlim } from "tsparticles-slim";

const particlesInit = async (engine) => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

const selectedForm = ref(true);
</script>

<style lang="scss">
.v-main {
  overflow-y: hidden;
  .v-selection-control {
    display: flex;
    justify-content: center;
    .v-switch__track {
      background-color: #1e9ad1 !important;
      opacity: 1;
    }
    .v-label {
      color: #fff;
      opacity: 1;
      font-weight: bold;
    }
  }
}
</style>
