<template>
  <header class="navigation">
    <h1 class="navigation-brand">
      <g-link :to="siteURL">{{ siteName }}</g-link>
    </h1>
    <Navigation
      :links="settings.navigation.main"
      :use-burger="true"
    />
  </header>
</template>

<script>
import Navigation from '@/components/Elements/Navigation'
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
  components: { Navigation },
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

<style>
.navigation { text-align: center; }
.navigation-menu-item {
  --paddings: var(--gap-third) var(--gap-demi);
  display: block;
  padding: var(--paddings);
  text-decoration: none;
}
/** Utiliser Post-CSS */
/* @media only screen and (min-width: calc(22.5rem * 2)) { */
@media (--tablet) {
  .navigation {
    color: red !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navigation-brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .navigation-menu {
    display: flex;
    margin-bottom: 0;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
