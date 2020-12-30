<template>
  <div id="nav" class="p-grid">
    <Menubar :model="items" class="p-col p-jc-between">
      <template #start>
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
    <router-view />
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
          label: "About",
          icon: "pi pi-fw pi-user",
          to: "/about"
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
.view {
  margin-top: 60px;
}
</style>
