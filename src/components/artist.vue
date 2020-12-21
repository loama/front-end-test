<template>
  <div
    class="col-md-6 col-lg-3 d-flex aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div
      class="card card-icon-2 card-body justify-content-between hover-shadow-3d"
    >
      <img class="artist-avatar" :src="artistData.avatar" />
      <h5 class="mb-0">{{ artistData.stagename }}</h5>
      <span>{{ artistData.fname }} {{ artistData.lname }} </span>

      <span>{{ artistData.country }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artistData: Object
  }
}
</script>

<style lang="sass" scoped>
.artist-avatar
  border-radius: 20px
  height: 154px
  width: 154px
</style>
