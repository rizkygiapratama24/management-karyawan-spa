// import vue router
import { createRouter, createWebHistory } from 'vue-router';

//define a routes
const routes = [
    {
        path: '/',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/auth/register.vue')
    }
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router