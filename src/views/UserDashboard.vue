<template>
  <v-container>
    <v-row>
      <v-col>
        <ul v-if='!isAuth'>
           <li class='button' >
            <router-link to="/sign-in">Sign in</router-link>
          </li>
          <li class='button' >
            <router-link to='/sign-up'>Register</router-link>
          </li>
      </ul>
      <div v-if='isAuth'>
        Hello!
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
     isAuth() {
      return this.$store.getters.isAuth;
    },
  }
};
</script>