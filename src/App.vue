<!-- <script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  
</script> -->

<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img
            alt="logo"
            src="../src/assets/imgs/logo.png"
            height="40"
            class="p-mr-2 clickable"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume" class="nav-link" exact
                >Resumé</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/phasmophobia" class="nav-link" exact
                >Phasmophobia</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="view">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <footer class="bg-dark text-center text-lg-start">
    <div class="text-center p-3">
      <p v-scrollanimation="'animate__fadeIn'" class="text-light">
        Made by: Flechas Bentley ©{{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
#view {
  margin-top: 66px;
  min-height: calc(100vh - (66px + 72px));
}
#footer {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
}
/* .router-link-active {
  add border to active link
} */
</style>
