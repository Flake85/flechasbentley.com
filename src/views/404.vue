<template>
  <div id="lost-main" class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-4">FlechasBentley.com says...</h5>
        <h6 class="card-subtitle mb-2 text-danger">
          This page does not exist.
        </h6>
        <h6 class="card-subtitle mb-2 text-muted ">
          Maybe try one of these links:
        </h6>
        <ul>
          <li><router-link to="/">Homepage</router-link></li>
          <li><router-link to="/resume">Resumé</router-link></li>
        </ul>
        <button
          type="button"
          class="btn btn-primary bi bi-chevron-right animate__animated animate__shakeX"
          @click="directToHome"
        >
          To Homepage
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
  methods: {
    directToHome(): void {
      // this.$router.push("/");
    }
  }
} as any);
</script>
<style lang="scss" scoped>
#lost-main {
  height: calc(100vh - (66px + 72px));
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 100%;
}
</style>
