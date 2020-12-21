<template>
  <div id="home" class="container">
    <h2 class="mt-4">Artists</h2>
    <div class="row mt-4">
      <Artist />
    </div>
  </div>
</template>

<script>
import Artist from '@/components/artist'

export default {
  name: 'Home',
  components: {
    Artist
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    getArtists() {
      this.$API({
        method: 'get',
        url: 'artists//?@order=id&@limit=100&@offset=0'
      }).then(function(response) {
        console.log(response)
      })
    }
  },
  watch: {
    loggedIn(newValue) {
      if (newValue) {
        this.getArtists()
      }
    }
  }
}
</script>
