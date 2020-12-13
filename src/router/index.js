import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '../views/TheHome.vue';
import TheMenu from '../views/TheMenu.vue';
import TheContact from '../views/TheContact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TheHome',
    component: TheHome
  },
  {
    path: '/the-menu',
    name: 'TheMenu',
    component: TheMenu,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: 'about' */ '../views/TheMenu.vue')
  },
  {
    path: '/the-contact',
    name: 'TheContact',
    component: TheContact,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: 'about' */ '../views/TheMenu.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
