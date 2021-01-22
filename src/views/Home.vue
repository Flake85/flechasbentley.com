<template>
  <div class="home">
    <div id="banner">
      <div class="panel">
        <h1
          class="p-text-center logotxt head text-white animate__animated animate__rubberBand"
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

    <div class="p-col-8 p-offset-2">
      <Card class="p-grid test">
        <template #title>
          <div v-scrollanimation="'animate__lightSpeedInRight'">
            About Me
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
      title: {
        title: "Developer",
        class: "p-col p-text-center text-white interval-text dev-text"
      },
      show: true,
      intervalHandle: 0
    };
  },
  created() {
    this.intervalHandle = window.setInterval(() => {
      this.show = false;
      setTimeout(() => {
        const titles = [
          {
            title: "Designer",
            class: "p-col p-text-center text-white logotxt interval-text"
          },
          {
            title: "Developer",
            class: "p-col p-text-center text-white interval-text dev-text"
          },
          {
            title: "Handcrafted",
            class: "p-col p-text-center text-white logotxt interval-text"
          },
          {
            title: "Husband",
            class: "p-col p-text-center text-white kaushantxt interval-text"
          },
          {
            title: "Father",
            class: "p-col p-text-center text-white kaushantxt interval-text"
          },
          {
            title: "Gamer",
            class: "p-col p-text-center text-white kaushantxt interval-text"
          }
        ];

        const randomItem = titles[Math.floor(Math.random() * titles.length)];

        randomItem.title !== this.title.title
          ? (this.title = randomItem)
          : (this.title = titles[Math.floor(Math.random() * titles.length)]);

        this.show = true;
      }, 1000); //timeout for css animation
    }, 5000); //time for interval
  },
  beforeUnmount() {
    clearInterval(this.intervalHandle);
  },
  computed: {
    age() {
      const dob = new Date("1985/12/26");
      const now = new Date();
      let age = now.getFullYear() - dob.getFullYear();
      const m = now.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) {
        age--;
      }
      return age;
    }
  }
});
</script>
<style lang="scss" scoped>
#banner {
  height: calc(100vh - 62px);
  display: flex;
  // background-image: linear-gradient(to right, #08f, #30cc8b);
}
.panel {
  flex: 2;
  display: flex;
  flex-direction: column;
}
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
.interval-text {
  font-size: 40px;
}
.head {
  margin-top: 0;
  font-size: 60px;
}
ul .p-menubar-root-list {
  background-color: black;
}
.dev-text {
  letter-spacing: 5px;
}
.test {
  height: 1000px;
}
@media (min-height: 768px) {
  .panel {
    transform: translateY(25%);
  }
}
</style>
