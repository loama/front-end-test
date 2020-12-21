<template>
  <div id="app">
    <Login />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Login from './views/Login'
import Navbar from './components/navbar'

export default {
  components: {
    Login,
    Navbar
  }
}
</script>

<style lang="sass">
/* stylelint-disable */
@import "./assets/css/theme-saas.css"
</style>
