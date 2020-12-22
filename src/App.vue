<template>
  <div id="app">
    <!-- <Login /> -->
    <Navbar />
    <router-view />

    <ArtistModal />
    <div
      id="modal-overlay"
      v-bind:class="{ show: modalOpened }"
      v-on:click="closeModal()"
    />
  </div>
</template>

<script>
import ArtistModal from './components/artist-modal'
// import Login from './views/Login'
import Navbar from './components/navbar'
import Vue from 'vue'
import axios from 'axios'

export default {
  components: {
    ArtistModal,
    // Login,
    Navbar
  },
  computed: {
    modalOpened() {
      return this.$route.query.modal !== undefined
    }
  },
  methods: {
    closeModal() {
      console.log('abc')
      this.$router.push({
        query: {}
      })
    },
    createAxiosInstance(token) {
      Vue.prototype.$API = axios.create({
        baseURL: 'https://api1.musicasaa.com/',
        timeout: 10000,
        headers: { Authorization: 'Bearer ' + token }
      })
      this.$store.commit('login')
    },
    getAPIKey() {
      const self = this
      axios({
        method: 'post',
        url: 'https://api1.musicasaa.com/admin/login',
        data: {
          email: 'loama18@gmail.com',
          pwd: 'MexicoEspana!'
        }
      })
        .then(function(response) {
          self.createAxiosInstance(response.data.jwt)
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getAPIKey()
  }
}
</script>

<style lang="sass">
/* stylelint-disable */
@import "./assets/css/theme-saas.css"

#app
  padding-top: 120px

.modal
  pointer-events: none

  .modal-dialog
    z-index: 100

  .modal-content
    pointer-events: none

  &.show
    .modal-content
      pointer-events: all

#modal-overlay
  background: #000
  height: 100vh
  opacity: 0
  left: 0
  position: fixed
  pointer-events: none
  top: 0
  transition: all 0.3s
  width: 100vw
  z-index: 99

  &.show
    opacity: 0.8
    pointer-events: all
</style>
