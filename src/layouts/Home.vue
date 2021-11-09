<script setup>

// /!\ Pas d'accès au frontmatter d'ici !

import Header from '~/components/Layout/Header.vue'
import Footer from '~/components/Layout/Footer.vue'
import Cover from '~/components/Layout/Cover.vue'


// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/content/settings/navigation.json';
import setting_global from '@/content/settings/global.json';
const props = defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})
const hasHero = computed(() => {
  if (!props.frontmatter) return false
  if (!props.frontmatter.hero) return false
  return true
})
// Do filter
import MD from 'markdown-it'
import { computed } from 'vue';
const filterMD = (text) => {
  return new MD({
    html: false,
    linkify: false, // Éviter les liens dans les extraits
    typographer: true,
    quotes: ['«\x40', '\x40»', '‹\x40', '\x40›']
    }).render(text)
}
// @todo: doit pouvoir charger des templates comme `./layouts/Markdown.vue` ?
</script>
<script>
export default { name: 'LayoutHome' }
</script>
<template>
  <Header />
    <Cover
    v-if="hasHero"
    :cover="frontmatter.hero"
  />
  <div class="prose-container"><slot/></div>
  <div class="sections">
    <section
      v-for="(section, index) in frontmatter.sections"
      :key="index"
      class="prose"
    >
      <h1>{{ section.title }}</h1>
      <div v-html="filterMD(section.content)"/>
      <z-button
        v-if="section.link.href"
        :to="section.link.href"
        :icon="section.link.icon"
        :type="section.link.color"
      >
        {{ section.link.text }}
      </z-button>
    </section>
  </div>
  <!-- Contenu divers, inscription newsletter, mise en vavant des réseaux sociaux, récupération de vélo, articles mis en avant, derniers articles, etc. -->
  <Footer>
    <template #subfooter>Mentions légales, etc…</template>
  </Footer>
</template>
<style scoped>
.sections { @apply flex justify-center px-4 }
.sections section { @apply max-w-40ch pr-4 last:pr-0 }
</style>
