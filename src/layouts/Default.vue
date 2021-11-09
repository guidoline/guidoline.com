<script setup>

// /!\ À simplifier encore
// Actuellement
// plugin pages => créer des routes à partit de `./content/`
// Router (dans `.src/main.js`) => créer des route à partir de `./src/pages/`
// pages: charge `layoutMarkdown` + layout + template si besoin
// Router: charge `[composant]` + `layoutMarkdown`  + layout + template
// Router: charge `[composant]` + layout (voir pour charger template également)
// Pour l'instant, les routes racines sont réservée aux composants
// Toute les routes Markdown commence en sous dossier (par ex. `/pages/[slug]`)
// Il y a (très) peu d'interêt à avoir un composant `./src/pages/` qui invoque
// lui-même un composant Markdown.


import Header from '~/components/Layout/Header.vue'
import Footer from '~/components/Layout/Footer.vue'

// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/content/settings/navigation.json';
import setting_global from '@/content/settings/global.json';
defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})
// @todo: doit pouvoir charger des templates comme `./layouts/Markdown.vue` ?
</script>
<script>
export default { name: 'LayoutDefault' }
</script>
<template>
  <Header />
  <main><slot/></main>
  <Footer>
    <template #subfooter>Mentions légales, etc…</template>
  </Footer>
</template>
