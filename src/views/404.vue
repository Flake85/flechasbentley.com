<template>
  <div id="lost-main" class="p-grid">
    <div class="p-col-6 p-offset-3">
      <Card>
        <template #title>
          <div class="logotxt">
            FlechasBentley.com
          </div>
        </template>
        <template #content>
          <div class="p-text">You seem lost?</div>
          <div class="p-text">Maybe try one of these links:</div>
          <ul>
            <li>
              <router-link to="/">Homepage</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </template>
        <template #footer>
          <Button
            icon="pi pi-arrow-right animate__animated animate__shakeX"
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
