import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/assets/scss/app.scss';

// prim vue components
import Card from 'primevue/card'
import Button from 'primevue/button'

createApp(App)
  .use(store)
  .use(router)
  .component('Card', Card)
  .component('Button', Button)
  .mount("#app");
    