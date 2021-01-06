<template>
  <div class="home">
    <div class="p-grid">
      <h1
        class="p-col p-text-center logotxt text-white animate__animated animate__rubberBand"
      >
        Flechas Bentley
      </h1>
    </div>
    <hr class="p-text-center text-white" />
    <div class="p-grid ">
      <transition name="fade" mode="out-in">
        <h3 class="p-col p-text-center text-white" v-if="show">
          {{ title }}
        </h3>
      </transition>
    </div>
    <hr class="p-text-center text-white p-mb-6" />

    <div class="p-col-8 p-offset-2">
      <Card class="p-grid animate__animated animate__fadeIn test">
        <template #title>
          <div class="animate__animated animate__lightSpeedInRight">
            Homepage
          </div>
        </template>
        <template #content>
          <div>
            Welcome to flechasbentley.com! If you are reading this, then you are
            here too early. That only means you get to see things as I develop
            my first website. Be sure to check back for more updates!
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      titles: [
        "Designer",
        "Developer",
        "Handcrafted",
        "Husband",
        "Father",
        "Gamer"
      ],
      title: "Developer",
      show: true,
      intervalHandle: 0
    };
  },
  created() {
    this.intervalHandle = setInterval(() => {
      this.show = false;
      setTimeout(() => {
        this.title = this.titles[
          Math.floor(Math.random() * this.titles.length)
        ];
        this.show = true;
      }, 1000);
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalHandle);
  },
  methods: {}
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.text-white {
  color: white;
}
hr {
  width: 65%;
}
.test {
  height: 1000px;
}
</style>
