<template>
  <header class='header'>
    <div class='header__title-div'>
      <h1 class='header__title-first'><font-awesome-icon class='header__icon' icon="ice-cream" /><span>Yummy</span></h1>
      <h2 class='header__title-second'>Ice Cream</h2>
      <h3 class='header__title-third'>Eat ice cream, be happy!</h3>
    </div>
    <div>
      <nav>
        <ul class='header__list'>
          <li class='header__item'>
            <router-link class='header__link' to="/">Log in</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Log out</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Sign up</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <nav class='header__nav-list' v-if='isVisible'>
        <v-menu content-class='header__list' bottom left>
          <template v-slot:activator='{ on, attrs }'>
            <v-btn 
              dark
              icon
              v-bind='attrs'
              v-on='on'
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for='(link, i) in links'
              :key='i'
              :to='link.route'
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
      <nav v-if='!isVisible'>
        <ul class='header__list'>
          <li class='header__item'>
            <router-link class='header__link' to='/'>Home</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to="/the-menu">Menu</router-link>
          </li>
          <li class='header__item'>
            <router-link class='header__link' to='/the-contact'>Visit us</router-link>
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
        {text: 'Visit us', route: '/the-contact'}
      ]
    };
  },
 computed: {
   isVisible() {
     return this.$vuetify.breakpoint.sm;
   },
 }
};
</script>

<style >
</style>