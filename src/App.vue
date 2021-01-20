<template>
  <div id="nav" class="p-grid">
    <Menubar id="nav" :model="items" class="p-col p-jc-between sticky">
      <template #start class="p-offset-3">
        <img
          alt="logo"
          src="../src/assets/imgs/logo.png"
          @click="directHome"
          height="40"
          class="p-mr-2 clickable"
        />
      </template>
    </Menubar>
  </div>
  <div class="view">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import Menubar from "primevue/menubar";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Menubar
  },
  data() {
    return {
      items: [
        {
          label: "Home Page",
          icon: "pi pi-fw pi-home",
          to: "/"
        },
        {
          label: "Resumé",
          icon: "pi pi-fw pi-user",
          to: "/resume"
        }
      ]
    };
  },
  methods: {
    directHome() {
      this.$router.push("/");
    }
  }
});
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
#nav {
  background-color: black;
  border-color: black;
}
#nav .p-menuitem .p-menuitem-link .p-menuitem-text {
  color: white;
}
#nav .p-menuitem:hover .p-menuitem-link .p-menuitem-text {
  color: black;
}
@media (min-width: 961px) {
  .view {
    margin-top: 62px;
  }
}
</style>
