<template>
  <v-container >
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
             <p 
              class='dashboard__error' 
              v-if='$v.formdata.title.$error'
            >
              Please add the title.
            </p>
        </div>
        <div class='dashboard__div'>
          <wysiwyg 
              class='dashboard__field dashboard__field--wysiwg'
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
        <div class='dashboard__div'>
          <button 
            class='button' 
            type='submit'
          >
            Add
          </button>
        </div>
        <div class='dashboard__success' v-if='addpost'>
          You have successfully added the post.
        </div>
      </form>
    </v-row>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
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
    addpost(){
      let status = this.$store.getters['addPostStatus'];
        if(status){
          this.clearPost();
        }
      return status;
    },
  },
  methods: {
    submitHandler() {
      if(!this.$v.$invalid) {
          if(this.formdata.description === '') {
            alert('Your post has no content. Please add information you would like to share with us.');
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
      this.$store.dispatch('addPost', this.formdata);
    },
    clearPost(){
      this.$v.$reset();
      this.formdata = {
        title:'',
        description:'',
        author:''
      };
    },
  }
};
</script>

<style scoped>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>