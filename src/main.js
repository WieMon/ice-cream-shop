import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Row, Column } from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
