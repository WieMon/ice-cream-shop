<template>
  <v-container>
    <v-row class='row'>
        <form class='input' @submit.prevent="onSubmit">
        <h2>Sign in</h2>
        <div class='input__div'>
          <label>Email:</label>
          <input class='input__field' type='email' v-model='formdata.email'/>
        </div>
        <div class='input__div'>
          <label>Password:</label>
          <input class='input__field' type='text' v-model='formdata.password' />
        </div>
        <button class='button'>
        Sign in
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
    onSubmit () {
      this.$store.dispatch('signin',this.formdata);
      console.log(this.formdata);
    }
  }
};
</script>
