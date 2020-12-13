import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Row, Column } from 'vue-grid-responsive';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('row', Row);
Vue.component('column', Column);
library.add(faIceCream);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
