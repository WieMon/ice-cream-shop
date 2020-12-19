<template>
  <header class='header'>
    <div class='header__title-div'>
      <h1 class='header__title'><font-awesome-icon class='header__icon' icon='ice-cream' /><span class='header__title-span'>Yummy</span></h1>
      <h2 class='header__title-second'>Ice Cream</h2>
      <h3 class='header__title-third'>Eat ice cream, be happy!</h3>
    </div>
    <div>
      <nav>
        <ul class='header__list'>
          <li class='header__item-first'>
            <router-link class='header__link-first' to='#'><font-awesome-icon icon='user' /></router-link>
            <ul class='header__list-second'>
              <li class='header__item-second' v-if='!isAuth'>
                <router-link class='header__link-second' to='/sign-in'>Sign in</router-link>
              </li>
              <li class='header__item-second' v-if='isAuth'>
                <span class='header__link-second' @click='signout'>Sign out</span>
              </li>
              <li class='header__item-second' v-if='!isAuth'>
                <router-link class='header__link-second' to='/sign-up'>Register</router-link>
              </li>
              <li class='header__item-second' v-if='isAuth'>
                <router-link class='header__link-second' to='/user-dashboard'>Dashboard</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
     <nav class='header__nav-list' v-if='isVisible'>
        <v-menu bottom left>
          <template v-slot:activator='{ on, attrs }'>
            <v-btn 
              dark
              icon
              v-bind='attrs'
              v-on='on'
            > 
              <v-icon large>mdi-format-align-justify</v-icon>
            </v-btn>
          </template>
          <v-list >
            <v-list-item
              v-for='(link, i) in links'
              :key='i'
              :to='link.route'
            >
              <v-list-item-title >{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
      <nav class='header__nav' v-if='!isVisible'>
        <ul class='header__list'>
          <li class='header__item-main'>
            <router-link class='header__link-main' to='/'>Home</router-link>
          </li>
          <li class='header__item-main'>
            <router-link class='header__link-main' to="/the-menu">Menu</router-link>
          </li>
          <li class='header__item-main'>
            <router-link class='header__link-main' to='/the-contact'>Visit us</router-link>
         </li>
           
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {text: 'Home', route: '/'},
        {text: 'Menu', route: '/the-menu'},
        {text: 'Visit us', route: '/the-contact'},
        {text: 'Dashboard', route: '/user-dashboard'}
      ]
    };
  },
  computed: {
    isVisible() {
      return this.$vuetify.breakpoint.sm;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
 },
 methods: {
    signout() {
      this.$store.commit('logout');
    }
  }
};
</script>