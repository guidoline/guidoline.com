<template>
  <div class="layout">
    <Header :settings="settings"/>
    <transition name="fade" appear>
      <main>
        <!-- @slot Slot principal -->
        <slot/>
      </main>
    </transition>
    <Footer :settings="settings"/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/../content/settings/navigation.yml';
import setting_global from '@/../content/settings/global.yml';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      settings: {
        navigation: setting_navigation,
        global: setting_global
      }
    }
  },
  metaInfo() {
    return {
      title: setting_global.name,
      meta: [
        {
          key: "description",
          name: "description",
          content: setting_global.description
        }
      ]

    }
  }
}

</script>

<style>
/** Forcer l'import des variables */
@import '../assets/css/variables.css';
:root {
  --margins: 0 0 1.5rem 0;
  --paddings-small: 0.6rem 1.2rem;
  --heading-color: red;
}
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

body {
  margin: 0;
  padding: 0;
  font-size: var(--font-size-normal);
  font-family: var(--font-family-normal);
  line-height: var(--line-height);
}

@media (--tablet) { body { --font-size-normal: 1.125em; } }

@media (--desktop) { body { --font-size-normal: 1.25em; } }

@media (--widescreen) { body { --font-size-normal: 1.375em; } }

@media (--fullhd) { body { --font-size-normal: 1.5em; } }

.layout {
  /* max-width: 760px; */
  /* modulo, column, padding, margin */
  /* max-width: calc(var(--gap) * 45); */
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
}

img { max-width: 100%; }
h1, h2, h3, h4, h5, h6, p, figure { margin: var(--margins); }
figcaption { }
</style>
