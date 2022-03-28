import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import locale from './language'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vfonts/FiraCode.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
    .use(router)
    .use(locale)
    .use(VueAxios, axios)
    .mount('#app')