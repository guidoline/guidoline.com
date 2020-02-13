<template>
  <footer id="footer">
    <Search />
    <nav v-for="link in settings.navigation.footer" :key="link.url">
      <g-link :to="link.url">{{ link.name }}</g-link>
    </nav>
    <section>
      <h1 v-html="settings.global.name"/>
      <div v-html="settings.global.description"/>
    </section>
  </footer>
</template>

<script>
import Search from '@/components/Search'

export default {
  components: {
    Search
  },
  props: {
    settings: {
      type: Object,
      required: true,
    }
  }
}
</script>
