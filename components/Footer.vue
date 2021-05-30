<template>
  <footer class="footer">
    <Container flex>&copy; <a href="https://www.tees.design" target="_blank">Tees.Design LLC</a> {{ new Date().getFullYear() }}</Container>
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
