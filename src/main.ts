import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import locate from './language'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(locate)
    .mount('#app')
