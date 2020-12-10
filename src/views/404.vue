<template>
    <div class="lost">
        <h2>You seem lost?</h2>
        <p>Maybe try this:</p>
        <router-link to="/">Home</router-link>
    </div>
</template>
<script>
export default {
    name: '404'
}
</script>
<style lang="scss" scoped>
.lost{
    text-align: center;
}
</style>