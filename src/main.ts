import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/scss/app.scss";
import { registerPrimeComponents } from "@/components/primevue";
import ScrollAnimations from "@/directives/scrollanimation";

const app = createApp(App);
app.directive("scrollanimation", ScrollAnimations);
app.use(store).use(router);

registerPrimeComponents(app);

app.mount("#app");
