import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/assets/scss/app.scss';

// prime vue stuff
import 'primevue/resources/themes/fluent-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// prim vue components
import Card from 'primevue/card'
import Button from 'primevue/button'

createApp(App)
  .use(store)
  .use(router)
  .component('Card', Card)
  .component('Button', Button)
  .mount("#app");
