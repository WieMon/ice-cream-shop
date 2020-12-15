<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2>Sign up</h2>
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
  </div>
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
