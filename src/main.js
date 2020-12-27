import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIceCream, faUser, faChevronRight, faChevronLeft, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vuetify from './plugins/vuetify';
import { MdCard, MdButton, MdDialog, MdContent } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import wysiwyg from 'vue-wysiwyg';
import vuelidate from 'vuelidate';

library.add(faIceCream, faUser, faChevronRight, faChevronLeft, faThumbtack);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueResource);
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdContent);
Vue.use(wysiwyg, {maxHeight: '500px',});
Vue.use(vuelidate);

Vue.http.options.root = 'https://ice-cream-shop-9b22e-default-rtdb.firebaseio.com';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
