<template>
  <v-app>
    <v-main>
      <TheHeader />
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
};
</script>
