import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    artists: []
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    },
    logout(state) {
      state.loggedIn = false
    },
    setArtists(state, payload) {
      state.artists = payload
    }
  },
  actions: {},
  modules: {}
})
