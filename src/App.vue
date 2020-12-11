<template>
  <div id="nav">
    <Menubar :model="items" >
      <template #start>
          <router-link to="/">
            <i class="pi pi-fw pi-briefcase"></i>Flechas Bentley
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
      //
    }
  }
}
</script>
<style lang="scss">

</style>
