import { createRouter, createWebHistory, RouterOptions } from 'vue-router';

const routes = [
    { path: "/", redirect: "/dash" },
    { name: 'dash', path: '/dash', component: () => import('../components/VueDash.vue'), meta: { requireAuth: false } },
    { name: 'NotFound', path: '/page-not-found', component: () => import('../components/PageNotFound.vue'), meta: { requireAuth: false } },
    { path: '/:pathMatch(.*)*', redirect: "/page-not-found" },
]
const router = createRouter({
    history: createWebHistory(),
    routes
} as RouterOptions)


export default router