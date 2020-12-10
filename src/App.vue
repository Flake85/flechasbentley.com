<template>
  <div id="nav">
    <Menubar :model="items" />
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
            label:'Flechas',
            icon:'pi pi-fw pi-briefcase',
            to: '/'
        },
      ]
    }
  }
}
</script>
<style lang="scss">

</style>
