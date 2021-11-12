<script>
import { computed } from 'vue'
export default { name: 'TemplateArticle'}
</script>
<script setup>
// @note: l'idéal serait de placer les fichiers de template dans le
// repertoire `./src/pages(/<parent>)/<template>.vue`
import Cover from '~/components/Layout/Cover.vue'
import { computed } from 'vue'
import { stringsToURL }from '~/services/utilities.js'
const props = defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})


/**
 * @todo: À transformer en filtre de modèle
 */

const category = computed(() => {
  if (!props.frontmatter.category) return null
  return stringsToURL('/journal/categorie/', [props.frontmatter.category]).shift()
})

const tags = computed(() => {
  if (!props.frontmatter.tags) return null
  return stringsToURL('/journal/etiquette/', props.frontmatter.tags)
})

const license = computed(() => {
  if (!props.frontmatter.license) return null
  return {
    to: props.frontmatter.license.href,
    name: props.frontmatter.license.nale
  }
})

/**
 * Author
 *
 * @todo Charger le contenu MD en relation (cf. related article)
 * @return Null | Object
 */
const author = computed(() => {
  if (!props.frontmatter.author) return null
  return { name: props.frontmatter.author }
})

</script>
<template>
  <main
    :class="frontmatter.cover ? `has-cover`: null"
  >
    <Cover :cover="frontmatter.cover" />
    <div class="prose-container">
      <slot />
    </div>
    <footer class="article-info">
      <section v-if="category">
        <h1 class="article-info-title">Catégorie</h1>
        <router-link :to="category.to">
          {{ category.name }}
        </router-link>
      </section>
      <section v-if="tags">
        <h1 class="article-info-title">Étiquettes</h1>
        <div class="tags">
          <router-link
            v-for="tag in tags"
            :key="tag.to"
            :to="tag.to"
          >
            {{ tag.name }}
          </router-link>
        </div>
      </section>
      <section v-if="author">
        <h1 class="article-info-title">Auteur</h1>
        <router-link
          v-if="author.to"
          :to="author.to"
        >
         {{ author.name }}
        </router-link>
        <template v-else>
          {{ author.name }}
        </template>
      </section>
    </footer>
    <!-- @ajouter : auteur, date, tags, category, related_posts, aticle suivat / précedent-->
  </main>
</template>
<style scoped>
.article-info-title { @apply uppercase text-xs text-gray-400; }
.article-info { @apply p-4 bg-white text-sm text-gray-500 font-light; }
.tags a:not(:last-child):after {
  content: ", ";
}
</style>
