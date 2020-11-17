// resources/js/plugins/vuetify.js
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// è necessario installare: >npm i @mdi/font
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {};

export default new Vuetify(opts);