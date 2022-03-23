import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import locale from './language'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store, key } from './store'
import 'vfonts/FiraCode.css'



const app = createApp(App)
    .use(store, key)
    .use(router)
    .use(locale)
    .use(VueAxios, axios)
    .mount('#app')