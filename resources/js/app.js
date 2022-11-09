/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;

// -----------------------------------------------------------------
// --- Import plugins
// -----------------------------------------------------------------
import store from "./store/index";
import vuetify from "./plugin/vuetify";
import swal from "./plugin/swal";
import moment from "./plugin/moment";

// -----------------------------------------------------------------
// --- Import routers
// -----------------------------------------------------------------
import routes from "./router/routes";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// -----------------------------------------------------------------
// --- Import layouts
// -----------------------------------------------------------------
import Base from "./layouts/Base.vue";
import Vue from "vue";

// -----------------------------------------------------------------
// --- Vue prototypes
// -----------------------------------------------------------------

Vue.prototype.$shortDateFormat = (date) => {
    return moment(date).format("Do MMM YYYY");
};

Vue.prototype.$guardTLD = async (to, from, next) => {
    let host = window.location.hostname;
    if (host[host.length - 1] === ".") {
        window.location.host = host.slice(0, -1);
    }
    next();
};

Vue.prototype.$shortDateTimeFormat = (date) => {
    return moment(date).format("Do MMM YYYY à HH:mm");
};

Vue.prototype.$longDateFormat = (date, end = false) => {
    return end
        ? `${moment(date).format("dddd Do MMMM YYYY")} à 00h 00`
        : moment(date).format("dddd Do MMMM YYYY");
};

Vue.prototype.$truncateString = (str, length) => {
    if (str == null) return "";
    return str.length <= length ? str : str.substring(0, length) + " ...";
};

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// -----------------------------------------------------------------
// --- Create Apps
// -----------------------------------------------------------------
axios.defaults.baseURL = process.env.MIX_API_BACKOFFICE;

const app1 = new Vue({
    store,
    vuetify,
    swal,
    moment,
    el: "#front-office",
    router: routes,
    render: (h) => h(Base),
});
