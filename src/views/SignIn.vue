<template>
  <v-container>
    <v-row class='row'>
        <form class='input' @submit.prevent="onSubmit">
        <h2>Sign in</h2>
        <div class='input__div'>
          <label>Email:</label>
          <input 
            class='input__field' 
            type='email' 
            v-model='formdata.email'
            @blur='$v.formdata.email.$touch()'
          />
          <div v-if="$v.formdata.email.$error">
            <p class='input__error' v-if='!$v.formdata.email.required'>
              Please enter your email address.
            </p>
            <p class="input__error" v-if="!$v.formdata.email.email">
              Please enter a valid email address.
            </p>
          </div>
        </div>
        <div class='input__div'>
          <label>Password:</label>
          <input 
            class='input__field' 
            type='password' 
            v-model='formdata.password'
            @blur='$v.formdata.password.$touch()'
          />
          <div v-if='$v.formdata.password.$error'>
            <p class='input__error' v-if='!$v.formdata.password.required'>
              Please enter your password.
            </p>
          </div>
        </div>
        <button class='button'>
        Sign in
        </button>
        </form>
    </v-row>
  </v-container>
</template>

<script>
import { required , email } from 'vuelidate/lib/validators';

export default {
  data () {
    return {
      error:false,
      formdata:{
        email: '',
        password: ''
      }
    };
  },
  validations: {
    formdata: {
      email: {
        required,
        email
      },
      password: 
      {
        required
      }
    }
  },
  methods: {
    onSubmit () {
      if(!this.$v.$invalid) {
        this.$store.dispatch('signin',this.formdata);
        this.formdata;
      } else {
        this.error = true;
          setTimeout(()=>{
            this.error = false;
          },3000);
      }
     
    }
  }
};
</script>
