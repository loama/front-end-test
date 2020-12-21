<template>
  <section class="min-vh-100 py-5" v-bind:class="{ hide: loggedIn }">
    <div class="container">
      <div class="row justify-content-center mt-6 pt-6">
        <div class="col-xl-4 col-lg-5 col-md-6">
          <div class="text-center mb-4">
            <img src="@/assets/img/logo.png" class="logo" alt="Musicasa" />
            <span>Enter your account details below</span>
          </div>
          <form v-on:submit.prevent="">
            <div class="form-group">
              <input
                type="email"
                name="login-email"
                placeholder="Email Address"
                class="form-control"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                name="login-password"
                placeholder="Password"
                class="form-control"
                v-model="password"
              />
              <small><a href="#">Forgot your password?</a> </small>
            </div>
            <div class="form-group">
              <button
                class="btn-block btn btn-primary"
                type="submit"
                v-on:click="signin()"
              >
                Sign in
              </button>
            </div>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="login-remember"
              />
              <label
                class="custom-control-label text-small text-muted"
                for="login-remember"
                >Keep me signed in</label
              >
            </div>
            <hr />
            <div class="text-center text-small text-muted">
              <span
                >Don't have an account yet? <a href="#">Create one</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    createAxiosInstance(token) {
      Vue.prototype.$API = axios.create({
        baseURL: 'http://api1.musicasaa.com/',
        timeout: 10000,
        headers: { Authorization: 'Bearer ' + token }
      })
      this.$store.commit('login')
    },
    signin() {
      const self = this
      axios({
        method: 'post',
        url: 'http://api1.musicasaa.com/admin/login',
        data: {
          email: this.email,
          pwd: this.password
        }
      })
        .then(function(response) {
          self.createAxiosInstance(response.data.jwt)
        })
        .catch(function(err) {
          alert('wrong password or something')
          console.log(err)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
section
  background: #000
  color: #fff
  left: 0
  opacity: 1
  pointer-events: all
  position: fixed
  top: 0
  transition: all 0.3s
  width: 100vw
  z-index: 100

  h1
    color: #fff

  img.logo
    display: block
    height: 50px
    margin: 0 auto

  &.hide
    opacity: 0
    pointer-events: none
</style>
