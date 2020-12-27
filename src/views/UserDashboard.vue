<template>
  <v-container >
    <v-row class='row' v-if='!isAuth'>
      <ul>
        <li class='button' >
          <router-link to="/sign-in">Sign in</router-link>
        </li>
        <li class='button' >
          <router-link to='/sign-up'>Register</router-link>
        </li>
      </ul>
    </v-row> 

    <v-row class='row' v-if='isAuth'>
      <form class='dashboard' @submit.prevent='submitHandler'>
        <div class='dashboard__div'>
          <h1 class='dashboard__title'>Hello</h1>
          <h2 class='dashboard__subtitle'>Please add your opinion or ask us a question:</h2>
        </div>
        <div 
          class='dashboard__div' 
          :class='{invalid: $v.formdata.title.$error}'
        >
          <label>Title</label>
            <input
              class='dashboard__field'
              type='text'
              @blur='$v.formdata.title.$touch()'
              v-model='formdata.title'
            >
             <p class='dashboard__error' v-if='$v.formdata.title.$error'>Please add the title.</p>
        </div>
        <div class='dashboard__div'>
          <wysiwyg 
              class='dashboard__field'
              v-model='formdata.description'
          />
        </div>
        <div class='dashboard__div'>
          <label>Author</label>
          <input
            class='dashboard__field'
            type='text'
            v-model='formdata.author'
          >
        </div>
        <div class='dashboard__success' v-if='addpost'>
          You have successfully added the post.
        </div>
        <div class='dashboard__div'>
          <button class='button' type='submit'>Add</button>
        </div>
      </form>
      <md-dialog 
        class='dashboard__dialog' 
        :md-active='dialog'
      >
          <p class='dashboard__dialog-text' >
            Your post has no content. Please add information you would like to share with us.
          </p>
          <md-dialog-actions>
            <md-button 
              class='button'
              @click='cancelDialog'
            >
            I want to add it 
            </md-button>
          </md-dialog-actions>
        </md-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      dialog: false,
      formdata: {
        title: '',
        description: '',
        author: ''
      }
    };
  },
  validations: {
    formdata: {
      title: {
        required,
      },
    }
  },
  computed: {
     isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    submitHandler() {
      if(!this.$v.$invalid) {
          if(this.formdata.description === '') {
            this.dialog = true;
          } else {
            this.addPost();
          }
      } else {
        alert('Please add the title.');
      }
    },
    cancelDialog() {
      this.dialog = false;
      this.addPost();
    },
    addPost() {

    }
  }
};
</script>

<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>