import Vue from 'vue';
import Home from '../components/Home.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export function createRouter() {
    const router = new VueRouter({
        mode: 'history', // -> /a/b  render spa {js:,html:,css:}
        base: __dirname,
        routes: [
            { path: '/', component: Home },
        ]
    });
    return router;
}
