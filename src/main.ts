import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/scss/app.scss";
import { registerPrimeComponents } from "@/components/primevue";
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(store).use(router);

registerPrimeComponents(app);
app.use(PrimeVue, { ripple: true }).mount("#app");
