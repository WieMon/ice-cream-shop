<template>
  <div>
    <LinksToDashboard v-if='!isAuth'/>
    <UserDashboard v-if='isAuth'/>
  </div>
</template>

<script>
import LinksToDashboard from './LinksToDashboard.vue';
import UserDashboard from './UserDashboard.vue';

export default {
  name: 'TheDashboard',
  components: {
    LinksToDashboard,
    UserDashboard
  },
  computed: {
     isAuth() {
      return this.$store.getters.isAuth;
    },
  }
};
</script>

