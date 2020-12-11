<template>
    <div id="lost-main" class="p-grid">
        <div class="p-col-6 p-offset-3">
            <Card>
                <template #header>
                    <!-- <img alt="user header" src="demo/images/usercard.png"> -->
                </template>
                <template #title>
                    Flechas Bentley Lost and Found...
                </template>
                <template #content>
                    <p>You seem to be lost?</p>
                    <p>Maybe try one of these links:</p>
                    <ul>
                        <li><router-link to="/">Homepage</router-link></li>
                    </ul>
                </template>
                <template #footer>
                    <Button icon="pi pi-arrow-right" label="To Homepage" @click="directToHome()"/>
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
import Button from 'primevue/button'

export default {
    name: '404',
    components: {
        Button
    },
    methods: {
        directToHome() {
            this.$router.push("/")
        }
    }
}
</script>
<style lang="scss" scoped>
#lost-main{
    margin-top: 60px;
}
</style>