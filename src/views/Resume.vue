<template>
  <div id="resume">
    <div class="card container">
      <div class="card-body">
        <h5 class="card-title">My Resumé</h5>
        <h6 class="card-subtitle mb-2 text-muted ">Coming Soon!</h6>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "resume"
});
</script>
<style lang="scss">
#resume {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - (66px + 72px));
}
</style>
