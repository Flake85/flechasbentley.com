import { App } from "vue";
import PrimeVue from "primevue/config";

import Card from "primevue/card";
import Button from "primevue/button";

export const registerPrimeComponents = (app: App): void => {
  app
    .use(PrimeVue, { ripple: true })
    .component("Card", Card)
    .component("Button", Button);
};
