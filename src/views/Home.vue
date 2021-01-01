<template>
  <div class="home p-grid">
    <div class="p-col-8 p-offset-2">
      <h1 class="animate__animated animate__bounce logotxt">Flechas Bentley</h1>
    </div>
    <div class="p-col-8 p-offset-2">
      <Card class="p-grid animate__animated animate__zoomIn">
        <template #title>
          Homepage
        </template>
        <template #content>
          Welcome to flechasbentley.com! If you are reading this, then you are
          here too early. That only means you get to see things as I develop my
          first website. Be sure to check back for more updates!
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>
<style lang="scss" scoped>
//
</style>
