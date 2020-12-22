<template>
  <div
    class="modal fade"
    id="sign-in-modal"
    style="display: block"
    v-bind:class="{ show: opened }"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content" v-if="artist !== undefined">
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col-auto">
              <img class="artist-avatar" :src="artist.avatar" />
            </div>

            <div class="col-auto">
              <h2 class="name">{{ artist.stagename }}</h2>
              <h6 class="mb-0">{{ artist.fname }} {{ artist.lname }}</h6>

              <h6>{{ artist.city }} - {{ artist.country }}</h6>

              <span>{{ artist.email }}</span>
            </div>
          </div>

          <div class="row pl-2 pr-2">
            <span>{{ artist.bio }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    artist() {
      const artists = this.$store.state.artists
      const id = this.$route.query.id
      return artists.filter(artist => artist.id === parseInt(id))[0]
    },
    opened() {
      return this.$route.query.modal === 'artist'
    }
  }
}
</script>

<style scoped lang="sass">
img.artist-avatar
  border-radius: 20px
  height: 154px
  width: 154px
</style>
