import { App } from 'vue'

import Card from 'primevue/card'

export const registerPrimeComponents = (app: App): void => {
    app.component('Card', Card)
}