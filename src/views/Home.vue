<template>
  <div id="home" class="container">
    <h2 class="mt-4">Artists</h2>
    <div class="row mt-4">
      <Artist
        v-for="artist in artists"
        v-bind:key="artist.id"
        :artistData="artist"
      />
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
  data() {
    return {
      artists: []
    }
  },
  methods: {
    getArtists() {
      const self = this
      this.$API({
        method: 'get',
        url: 'artists//?@order=id&@limit=100&@offset=0'
      }).then(function(response) {
        self.artists = response.data.data
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
