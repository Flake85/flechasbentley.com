<script setup lang="ts">
  import { ref } from 'vue'
  const title = ref({
    title: "Developer",
    class: "col text-center text-light interval-text dev-text"
  })
  const show = ref(true)
  const intervalHandle = ref(0)

  intervalHandle.value = window.setInterval(() => {
      show.value = false;
      setTimeout(() => {
        const titleClass = "col text-center text-light interval-text";
        const titles = [
          {
            title: "Designer",
            class: titleClass + " logotxt"
          },
          {
            title: "Developer",
            class: titleClass + " dev-text"
          },
          {
            title: "Handcrafted",
            class: titleClass + " logotxt"
          },
          {
            title: "Husband",
            class: titleClass + " kaushantxt"
          },
          {
            title: "Father",
            class: titleClass + " kaushantxt"
          },
          {
            title: "Gamer",
            class: titleClass + " kaushantxt"
          }
        ];

        const randomItem = titles[Math.floor(Math.random() * titles.length)];

        randomItem.title !== title.value.title
          ? (title.value = randomItem)
          : (title.value = titles[Math.floor(Math.random() * titles.length)]);

        show.value = true;
      }, 1000); //timeout for css animation
    }, 5000); //time for interval
  
  defineExpose({ title, show, intervalHandle })
</script>

<template>
  <div class="home">
    <div id="banner" class="container">
      <div class="panel">
        <h1
          v-scrollanimation="'animate__rubberBand'"
          class="text-center logotxt head text-light"
        >
          Flechas Bentley
        </h1>
        <hr />
        <transition name="fade" mode="out-in">
          <h3 :class="title.class" v-if="show">
            {{ title.title }}
          </h3>
        </transition>
      </div>
    </div>
    <div class="container">
      <div class="card test">
        <div class="card-body">
          <h5
            class="card-title"
            v-scrollanimation="'animate__lightSpeedInRight'"
          >
            About Me
          </h5>
          <h6 class="card-subtitle mb-2 text-muted ">Coming Soon!</h6>
          <p class="card-text">
            Welcome to flechasbentley.com! If you are reading this, then you are
            here too early. That only means you get to see things as I develop
            my first deployed website. While you're here, check out my
            <router-link to="/resume">resumé</router-link> or my 
            <router-link to="/phasmophobia">phasmophobia tool</router-link>. 
            Also, make sure to check back for more updates!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#banner {
  height: calc(100vh - 65.97px);
  display: flex;
}
.panel {
  flex: 1;
  margin: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
hr {
  color: white;
}
.interval-text {
  font-size: 40px;
}
.head {
  margin-top: 0;
  font-size: 60px;
}
.dev-text {
  letter-spacing: 5px;
}
.test {
  height: 1000px;
}
</style>
