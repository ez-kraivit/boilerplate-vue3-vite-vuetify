import {createRouter,createWebHashHistory} from 'vue-router'

import Home from "../views/Home.vue"

const title = (name) => `${import.meta.env.VITE_TITLE} - ${name}`;

const routes = [
    {
        path: '/',
        name: 'Home',
        meta:{
            title: title("Home")
        },
        component: Home
    }
 ]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:routes
});

export default router;