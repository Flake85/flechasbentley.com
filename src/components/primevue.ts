import { App } from "vue";
import Primevue from "primevue/config";

import Card from "primevue/card";
import Button from "primevue/button";

export const registerPrimeComponents = (app: App): void => {
  app
    .component("Card", Card)
    .component("Button", Button)
    .use(Primevue, { ripple: true });
};
