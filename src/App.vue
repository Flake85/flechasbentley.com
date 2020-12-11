<template>
  <div id="nav" class="p-grid">
    <Menubar :model="items" class="p-col">
      <template #start>
          <router-link to="/">
            <i class="pi pi-fw pi-home"></i>
          </router-link>
      </template>
    </Menubar>
  </div>
  <router-view />
</template>
<script>
import Menubar from 'primevue/menubar';

export default {
  components: {
    Menubar
  },
  data() {
    return {
      items: [
          {
              label: "Flechas Bentley",
              to: "/"
          }
      ]
    }
  }
}
</script>
<style lang="scss">

</style>
