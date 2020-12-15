import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '../views/TheHome.vue';
import TheMenu from '../views/TheMenu.vue';
import TheContact from '../views/TheContact.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import UserDashboard from '../views/UserDashboard.vue';

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
  },
  {
    path: '/the-contact',
    name: 'TheContact',
    component: TheContact,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/user-dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
