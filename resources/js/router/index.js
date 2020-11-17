import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../pages/MainPage.vue";
import About from "../pages/About.vue";


const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage
    },
    {
        path: "/about",
        name: "About",
        component: About,
    }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    // NOTA: la riga qui sotto è importante quando si fa il deploy dell'applicazione, per settare il path di root corretto
    // BASE_URL - corresponds to the publicPath option in vue.config.js and is the base path your app is deployed at.
    base: process.env.BASE_URL,
    routes
});

export default router;
