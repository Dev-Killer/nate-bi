import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    /* {
        path: '/dashboard',
        alias: '/admin',
        name: 'dashboard',
        component: DashboardAdmin
    }, */
    /* {
        path: '/print/create',
        name: 'PrintCreate',
        component: Impression
    },
    {
        path: '/print/:id',
        name: 'PrintShow',
        component: Impression,
        props: true
    }, */
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
