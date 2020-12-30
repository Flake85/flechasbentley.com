<template>
  <div id="lost-main" class="p-grid">
    <div class="p-col-6 p-offset-3">
      <Card>
        <template #header>
          <h1 class="logotxt" style="padding-left: 0.5em">
            Flechas Bentley
          </h1>
        </template>
        <template #title>
          Lost and Found...
        </template>
        <template #content>
          <p>You seem to be lost?</p>
          <p>Maybe try one of these links:</p>
          <ul>
            <li><router-link to="/">Homepage</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </template>
        <template #footer>
          <Button
            icon="pi pi-arrow-right"
            label="To Homepage"
            @click="directToHome()"
          />
        </template>
      </Card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
  methods: {
    directToHome(): void {
      this.$router.push("/");
    }
  }
});
</script>
<style lang="scss" scoped>
//
</style>
