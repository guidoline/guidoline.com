<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <p v-html="settings" />
    <transition name="fade" appear>
      <main>
      <slot/>
      </main>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/../content/settings/navigation.yml';
import setting_theme from '@/../content/settings/theme.yml';
export default {
  data() {
    return {
      settings: {
        navigation: setting_navigation,
        theme: setting_theme
      }
    }
  }
}
</script>

<style>

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
