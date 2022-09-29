import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import './directives/scrollanimation'
import ScrollAnimation from './directives/scrollanimation'

createApp(App).directive("scrollanimation", ScrollAnimation).use(router).mount('#app')
