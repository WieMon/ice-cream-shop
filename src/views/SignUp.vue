<template>
  <v-container>
    <v-row class='row'>
      <form class='input' @submit.prevent="onSubmit">
        <h2>Register</h2>
        <div class='input__div'>
          <label>Email:</label>
          <input class='input__field' type='email' v-model="formdata.email"/>
        </div>
        <div  class='input__div'>
          <label>Password:</label>
          <input class='input__field' type='password' v-model="formdata.password" />
        </div>
        <button class='button'>
          Register
        </button>
      </form>
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
