import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/public/HelloWorld.vue";
import Login from "../pages/public/Login.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import Contribution from "../pages/admin/Contribution.vue";
import PublicLayout from "../layouts/PublicLayout.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/admin",
            component: AdminLayout,
            children: [
                {
                    path: "dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                },
                {
                    path: "contribution",
                    name: "Contribution",
                    component: Contribution,
                },
            ],
        },
        {
            path: "/",
            component: PublicLayout,
            children: [
                {
                    path: "",
                    name: "Home",
                    component: HomeView,
                },
                {
                    path: "/login",
                    name: "Login",
                    component: Login,
                },
            ],
        },

        /**
         * Vues Other
         */
        {
            path: "/*",
            redirect: { name: "Home" },
        },
    ],
    mode: "hash",
    base: process.env.BASE_URL,
});

export default router;
