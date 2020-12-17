<template>
  <v-container>
    <v-row>
      <v-col>
        <form class='input__form' @submit.prevent="onSubmit">
          <h2>Sign in</h2>
          <div class='input'>
            <label class='input__label'>Email</label>
            <input class='input__field' type='email' v-model='formdata.email'/>
          </div>
          <div class='input'>
            <label class='input__label'>Password</label>
            <input class='input__field' type='text' v-model='formdata.password' />
          </div>
          <button class='button'>
          Sign in
          </button>
        </form>
      </v-col>
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
