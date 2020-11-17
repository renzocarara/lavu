require('./bootstrap');

import Vue from 'vue';
import App from './App.vue'; // Vue entry point component
import vuetify from "./plugins/vuetify";
import router from "./router";

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    components: {
        App,
    }
});