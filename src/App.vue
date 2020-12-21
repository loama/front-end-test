<template>
  <div id="app">
    <Login />
    <router-view />
  </div>
</template>

<script>
import Login from './views/Login'

export default {
  components: {
    Login
  }
}
</script>

<style lang="sass">
/* stylelint-disable */
@import "./assets/css/theme-saas.css"
</style>
