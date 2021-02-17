import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// when getting from this use `import store from store/index.js`
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  // when calling these, do `store.getters.name` no parenthisies if no payload.
  getters: {
    user(state){
      return state.user
    }
  },
  // this should only be used in the actions below
  mutations: {
    SET_LOGGED_IN(state, value){
      state.user.loggedIn = value;
    },
    SET_USER(state, data){
      state.user.data = data;
    }
  },
  // these should only be used to SET the data. 
  // eg store.dispatch("name", payload);
  actions: {
    fetchUser({ commit }, user){
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules: {
  }
})
