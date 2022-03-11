<script setup>

// /!\ Pas d'accès au frontmatter d'ici !

import Header from '~/components/Layout/Header.vue'
import Footer from '~/components/Layout/Footer.vue'
import Cover from '~/components/Layout/Cover.vue'
import { computed } from 'vue'
import { markdownify } from '~/services/utilities.js'


// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/content/settings/navigation.json';
import setting_global from '@/content/settings/global.json';
const props = defineProps({
  // Récupération de tout le contenu
  content: {
    type: Object,
    default: null
  },
  // Récupération du frontmatter seulement
  // frontmatter: {
  //   type: Object,
  //   default: {}
  // }
})
const hasHero = computed(() => {
  if (!props.content) return false
  if (!props.content.hero) return false
  return true
})

// @todo: doit pouvoir charger des templates comme `./layouts/Markdown.vue` ?
</script>
<script>
export default { name: 'LayoutHome' }
</script>
<template>
  <Header />
    <Cover
    v-if="hasHero"
    :cover="content.hero"
  />
  <div id="content" class=" md:grid grid-cols-6 grid-rows-3 px-4">
    <div class="col-span-4 lg:col-start-2 lg:col-span-3 row-span-3 prose">
      <slot/>
    </div>
    <div class="container col-span-2 col-start-5 row-start-2 place-self-center mx-auto max-w-42ch text-center my-4">
      [F] [T]<br>
      Newsletter
    </div>
  </div>
  <z-grid class="sections px-4">
    <section
      v-for="(section, index) in content.sections"
      :key="index"
      class="prose z-grid-item-major"
    >
      <!-- Créer des composants pour chaque type de template de section -->
      <code>template de section: {{ section.template }}</code>
      <h1>{{ section.title }}</h1>
      <div v-if="section.content" v-html="markdownify(section.content)"/>
      <z-button
        v-if="section.link"
        :to="section.link.href"
        :icon="section.link.icon"
        :type="section.link.color"
      >
        {{ section.link.text }}
      </z-button>
    </section>
    <section class="z-grid-item-major is-gizmo">
      GIZMO
    </section>
  </z-grid>
  <!-- Contenu divers, inscription newsletter, mise en vavant des réseaux sociaux, récupération de vélo, articles mis en avant, derniers articles, etc. -->
  <Footer>
    <template #subfooter>Mentions légales, etc…</template>
  </Footer>
</template>
<style scoped>
.sections section { @apply bg-primary-100 p-4; }
</style>
