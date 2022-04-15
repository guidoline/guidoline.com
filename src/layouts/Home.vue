<script setup>

import Header from '~/components/Layout/Header.vue'
import Footer from '~/components/Layout/Footer.vue'
import Cover from '~/components/Layout/Cover.vue'
import Newsletter from '~/components/Utilities/Newsletter.vue'
import Section from '~/components/Layout/Section.vue'
import { computed } from 'vue'
import { markdownify } from '~/services/utilities.js'


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
      <Newsletter />
    </div>
  </div>
  <z-grid class="px-4 is-container" v-if="content">
    <Section
      v-for="(section, index) in content.sections"
      :key="index"
      :class="section.class ? section.class : ''"
    >
      <h1>{{ section.title }}</h1>
      <div v-if="section.content" v-html="markdownify(section.content)"/>
      <template v-if="section.link">
        <div v-if="section.link.href" class="text-center">
        <z-button
          :to="section.link.href"
          :icon="section.link.icon"
          :class="section.link.color"
          filled
        >
          {{ section.link.text }}
        </z-button>
        </div>
      </template>
    </Section>

  </z-grid>
  <!-- Contenu divers, inscription newsletter, mise en vavant des réseaux sociaux, récupération de vélo, articles mis en avant, derniers articles, etc. -->
  <Footer>
    <template #subfooter>Mentions légales, etc…</template>
  </Footer>
</template>
<style scoped>
/* .sections section {
  @apply p-4;
  @apply text-insert-text bg-insert-background dark:bg-night-background-dark;
}
.sections section.is-primary {
  @apply text-callout-text bg-callout-background;
} */
</style>
