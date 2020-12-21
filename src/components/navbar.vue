<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark position-fixed scrolled"
    data-overlay=""
    data-sticky="top"
    style="max-width: 994px; top: 0px"
  >
    <div class="container">
      <img class="img-logo" src="@/assets/img/logo.png" alt="Leap" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img
          class="icon navbar-toggler-open"
          src=""
          alt="menu interface icon"
          data-inject-svg=""
        />
        <img
          class="icon navbar-toggler-close"
          src=""
          alt="cross interface icon"
          data-inject-svg=""
        />
      </button>
    </div>
  </nav>
</template>

<style scoped lang="sass">
nav
  background: #f4be50 !important
  left: 0
  position: fixed
  top: 0
  z-index: 99 !important

  .img-logo
    height: 48px
</style>
