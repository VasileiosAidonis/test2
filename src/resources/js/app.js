import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {path: '/billings', component: Foo},
        {path: '/bar', component: Bar}
    ]
});

new Vue({
    router
}).$mount('#app');
