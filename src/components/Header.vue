<template>
  <header class="header">
    <h1>
      <g-link :to="siteURL">{{ siteName }}</g-link>
    </h1>
    <nav class="menu" v-for="link in settings.navigation.main" :key="link.url">
      <g-link class="menu-item" :to="link.url">{{ link.name }}</g-link>
    </nav>
  </header>
</template>

<script>
/**
 * Entête principal
 */
export default {
  props: {
    /**
     * Réglage globaux
     */
    settings: {
      type: Object,
      required: true,
    }
  },
  computed: {
    /**
     * Le nom du site
     */
    siteName() { return this.settings.global.name },
    /**
     * L'URL global du site
     */
    siteURL() {
      // Ne peut pas être passé à `:to`
      return this.settings.global.url ? this.settings.global.url : '/'
    }
  }
}
</script>
