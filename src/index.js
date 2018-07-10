import Vue from "vue";
import App from './App.vue';

const root = document.createElement("div");

new Vue({
    render: h => h(App)
}).$mount(root);

document.body.appendChild(root);