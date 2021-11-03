<script setup>
import Cover from '~/components/Layout/Cover.vue'
/**
 * Note:
 * Ici nous utilisons un agencement de composant un peu particulier,
 * qui permet de faciliter l'accès au contexte du fronmatter du fichier MD.
 * Sans devoir emettre le frontatter vers le composant parent.
 */
const props = defineProps({
  frontmatter: {
    type: Object,
    required: true
  }
})
// Do filter
import MD from 'markdown-it'
const filterMD = (text) => {
  return new MD({
    html: false,
    linkify: false, // Éviter les liens dans les extraits
    typographer: true,
    quotes: ['«\x40', '\x40»', '‹\x40', '\x40›']
    }).render(text)
}
</script>
<script>
export default { name: 'LayoutDefaultHome' }
</script>
<template>
  <pre>./templates/Default/Home.vue</pre>
  <details>
    <summary>Debug</summary>
    <pre>{{ frontmatter }}</pre>
  </details>
<!-- z-hero -->
  <Cover
    v-if="frontmatter.hero.src"
    :cover="frontmatter.hero"
  />
  <slot/>
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
</template>
<style scoped>
.sections { @apply flex justify-center px-4 }
.sections section { @apply max-w-40ch pr-4 last:pr-0 }
</style>
