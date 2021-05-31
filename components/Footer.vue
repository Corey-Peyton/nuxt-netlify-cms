<template>
  <footer class="footer">
    <Container flex>&copy; Tees.Design LLC {{ new Date().getFullYear() }}</Container>Designer by NewWaveTee
  </footer>
</template>

<script>
import Container from '~/components/Container'

export default {
  components: {
    Container,
  },
}
</script>

<style lang="scss">
.footer {
  padding: 2rem 0;

  @media (max-width: 567px) {
    padding: 1.2rem 0;
  }
}
</style>
