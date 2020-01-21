<template>
  <footer>
    <nav v-for="link in settings.navigation.footer" :key="link.url">
      <g-link :to="link.url">{{ link.name }}</g-link>
    </nav>
    <section>
      <h1 v-html="settings.theme.name"/>
      <div v-html="settings.theme.description"/>
    </section>
  </footer>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true,
    }
  }
}
</script>
