<template lang="pug">
  #home
    b-container
      b-router-view
        b-col(cols="12")
          h1 {{ current }}
          h2 {{timetext}}
</template>

<script>
export default {
  name: 'Home',
  computed: {
    current () {
      return this.$store.state.current
    },
    time () {
      return this.$store.state.timeleft
    },
    alram () {
      return this.$store.state.alarm
    },
    totdos () {
      return this.$store.state.todos
    }
  }
}
</script>
