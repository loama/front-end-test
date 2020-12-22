<template>
  <div id="home" class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div class="row">
          <div
            class="col-sm-6 col-md-4 col-lg-3 genre-card"
            v-for="genre in genres"
            v-bind:key="genre"
            v-on:click="selectGenre(genre)"
          >
            <div
              class="card card-sm card-body flex-row align-items-center"
              v-bind:class="{ selected: selectedGenre === genre }"
            >
              <div class="ml-3">
                <h5 class="title mb-0">{{ genre }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mt-4">Artists</h2>
    <div class="row mt-4">
      <Artist
        v-for="artist in filteredArtists"
        v-bind:key="artist.id"
        :artistData="artist"
      />

      <div v-if="filteredArtists.length === 0">
        No artists matching criteria
      </div>
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
    },
    artists() {
      return this.$store.state.artists
    },
    filteredArtists() {
      const filtered = []
      if (this.selectedGenre === null) {
        return this.artists
      }

      for (let i = 0; i < this.artists.length; i++) {
        const artist = this.artists[i]

        if (artist.genres.includes(this.selectedGenre)) {
          filtered.push(artist)
        }
      }

      return filtered
    }
  },
  data() {
    return {
      genres: [],
      selectedGenre: null
    }
  },
  methods: {
    getArtists() {
      const self = this
      this.$API({
        method: 'get',
        url: 'artists//?@order=id&@limit=100&@offset=0'
      }).then(function(response) {
        self.processArtists(response.data.data)
      })
    },
    getGenres() {
      const self = this
      this.$API({
        method: 'get',
        url: 'genres/?order=name&@offset=0&@limit=30'
      }).then(function(response) {
        const genres = response.data.data
        const result = []
        for (let i = 0; i < genres.length; i++) {
          const genre = genres[i].name
          result.push(genre)
        }

        self.genres = result
      })
    },
    async processArtists(artists) {
      const all = []
      for (let i = 0; i < artists.length; i++) {
        const artist = artists[i]
        const response = await this.$API({
          method: 'get',
          url: 'c/artist/' + artist.id + '/genres'
        })

        const genres = []

        for (let i = 0; i < response.data.data.length; i++) {
          const genre = response.data.data[i].name
          genres.push(genre)
        }

        artist.genres = genres
        all.push(artist)
      }

      this.$store.commit('setArtists', all)
    },
    selectGenre(name) {
      this.selectedGenre = name
    }
  },
  watch: {
    loggedIn(newValue) {
      if (newValue) {
        this.getArtists()
        this.getGenres()
      }
    }
  }
}
</script>

<style scoped lang="sass">
.title
  text-transform: capitalize

.selected
  background: #e0e0e0

.genre-card
  cursor: pointer
</style>
