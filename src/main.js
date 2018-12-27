import Vue from 'vue';
import './cube-ui';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
