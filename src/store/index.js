/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex);

const FbAuth = 'https://identitytoolkit.googleapis.com/v1';
const FbApiKey = 'AIzaSyDfD1mGwsKbKTCQKFDG31BAmof2yqnu5w0';

export default new Vuex.Store({
  state: {
    email: '',
    token: '',
    refresh: '',
    addpost: false,
  },
  getters: {
    isAuth(state) {
      if(state.token) {
        return true;
      } return false;
    },
    addPostStatus(state){
      return state.addpost
  },
  },
  mutations: {
    auth(state,authData) {
      state.email = authData.email;
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;
      if(authData.type === 'sign-in') {
        router.push('/user-dashboard')
      }
    },
    logout(state) {
      state.email = null;
      state.token = null;
      state.refresh = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      router.push('/');
    },
    addPost(state){
      state.addpost = true;
    },
    clearAddPost(state){
      state.addpost = false;
  },
  },
  actions: {
    signup({ commit }, payload) {
      Vue.http.post(`${FbAuth}/accounts:signUp?key=${FbApiKey}`,{
        ...payload,
        returnSecureToken: true
      })
      .then( response => response.json())
      .then( authData => {
        commit('auth',authData);
        localStorage.setItem('token',authData.idToken);
        localStorage.setItem('refresh',authData.refreshToken);
      })
      .catch( error => console.log(error));
    },
    signin({ commit }, payload) {
      Vue.http.post(`${FbAuth}/accounts:signInWithPassword?key=${FbApiKey}`,{
        ...payload,
        returnSecureToken: true
      })
      .then( response => response.json())
      .then( authData => {
        commit('auth',{
          ...authData,
        type: 'sign-in'
      });
        localStorage.setItem('token',authData.idToken);
        localStorage.setItem('refresh',authData.refreshToken);
      })
      .catch( error => console.log(error));
    },
    refreshToken({commit}){
      const refreshToken = localStorage.getItem('refresh');
      if(refreshToken){
        Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`,{
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
        .then( response => response.json())
        .then( authData => {
          commit('auth',{
            idToken: authData.id_token,
            refreshToken: authData.refresh_token
          });
          localStorage.setItem('token',authData.id_token);
          localStorage.setItem('refresh',authData.refresh_token);
        });
      }
    },
    addPost({ commit, state }, payload) {
      Vue.http.post(`posts.json?auth=${state.token}`,payload)
      .then(response => response.json())
      .then(response => {
        commit('addPost');
        setTimeout(()=>{
          commit('clearAddPost')
      },3000)
      });

    }
  },
  modules: {}
});
