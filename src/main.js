import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIceCream, faUser, faChevronRight, faChevronLeft, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vuetify from './plugins/vuetify';
import { MdCard } from 'vue-material/dist/components';

library.add(faIceCream, faUser, faChevronRight, faChevronLeft, faThumbtack);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueResource);
Vue.use(MdCard);

Vue.http.options.root = 'https://ice-cream-shop-9b22e-default-rtdb.firebaseio.com';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
