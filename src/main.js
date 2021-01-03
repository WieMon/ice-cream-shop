import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIceCream, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vuetify from './plugins/vuetify';
import { MdCard } from 'vue-material/dist/components';
import wysiwyg from 'vue-wysiwyg';
import vuelidate from 'vuelidate';
import VueCarousel from 'vue-carousel';

library.add(faIceCream, faUser);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueResource);
Vue.use(MdCard);
Vue.use(wysiwyg, {maxHeight: '500px', hideModules: { 'table': true , 'removeFormat': true, 'separator': true, 'image': true, 'code': true },});
Vue.use(vuelidate);
Vue.use(VueCarousel);

Vue.http.options.root = 'https://ice-cream-shop-9b22e-default-rtdb.firebaseio.com';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
