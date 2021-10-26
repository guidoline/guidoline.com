<template>
  <header class="header">
    <div class="navigation navigation-sup">
      <p>
        <Icon name="mail" /> <a href="mailto:contact@guidoline.com">contact@guidoline.com</a>
      </p>
      <p>
        <Icon name="phone" />
        Tèl : 06 55 55 55 55
      </p>
    </div>
    <div class="navigation">
      <h1 class="navigation-brand">
        <g-link :to="siteURL">{{ siteName }}</g-link>
      </h1>
      <Navigation
        :links="settings.navigation.main"
        :use-burger="true"
      />
    </div>
  </header>
</template>

<script>
import Navigation from '@/components/Elements/Navigation'
import Icon from '@/components/Elements/Icon'
export default {
  components: {
    Navigation,
    Icon
  },
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

<style>
.navigation {
  padding: var(--gap) 0;
  text-align: center;
  /* Est-ce que le nesting composé fonctionne avec PostCSS ? */
  &-sup { color: red;}
}

.navigation-sup {
    font-size: var(--font-size-small);
    padding-bottom: 0;
    & p:last-child { margin-bottom: 0; }
}
.navigation-menu-item {
  display: block;
  padding: var(--paddings);
  text-decoration: none;
}
/** Utiliser Post-CSS */
/* @media only screen and (min-width: calc(22.5rem * 2)) { */
@media (--tablet) {
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
      margin: 0;
    }
  }
  .navigation-brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
  }
  .navigation-menu {
    display: flex;
    margin-bottom: 0;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
