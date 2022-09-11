import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../pages/public/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import('../pages/public/AboutView.vue');
        }
    },

    /**
     * Vues Other
     */
    {
        path: '/*',
        redirect: { name: 'Home' }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
