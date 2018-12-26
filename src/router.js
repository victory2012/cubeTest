import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: () => import(/* webpackChunkName: "me" */ './views/me.vue')
    },
    {
      path: '/battery',
      name: 'battery',
      component: () =>
        import(/* webpackChunkName: "battery" */ './views/battery.vue')
    },
    {
      path: '/device',
      name: 'device',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
