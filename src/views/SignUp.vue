<template>
  <v-container>
    <v-row>
      <v-column>
        <form @submit.prevent="onSubmit">
          <h2>Register</h2>
          <div class='input'>
            <label class='input__label'>Email</label>
            <input class='input__field' type='email' v-model="formdata.email"/>
          </div>
          <div class='input'>
            <label class='input__label'>Password</label>
            <input class='input__field' type='password' v-model="formdata.password" />
          </div>
          <button class='button'>
            Sign up
          </button>
        </form>
      </v-column>
    </v-row>
  </v-container>
</template>

<script>
 export default {
  data () {
    return {
      formdata:{
        email: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('signup',this.formdata);
    }
  }
};
</script>
