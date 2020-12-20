<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view />
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>

import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  },
  created(){
    this.$store.dispatch('refreshToken');
  }
};
</script>
