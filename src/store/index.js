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
  },
  getters: {
    isAuth(state) {
      if(state.token) {
        return true;
      } return false;
    },
  },
  mutations: {
    auth(state,authData) {
      state.email = authData.email;
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;
    },
    logout(state) {
      state.email = null;
      state.token = null;
      state.refresh = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      router.push('/');
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
        commit('auth',authData);
        localStorage.setItem('token',authData.idToken);
        localStorage.setItem('refresh',authData.refreshToken);
      })
      .catch( error => console.log(error));
    },
  },
  modules: {}
});
