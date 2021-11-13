<script>
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

const cover = computed(() => {
  if (!props.frontmatter.cover) return null
  return {
    ...props.frontmatter.cover,
    // supcaption: `Publié le ${props.frontmatter.date}`
  }
})

const category = computed(() => {
  if (!props.frontmatter.category) return null
  return stringsToURL('/journal/categorie/', [props.frontmatter.category]).shift()
})

// Pas nécessaire de compilé ?
const tags = (() => {
  if (!props.frontmatter.tags) return null
  return stringsToURL('/journal/etiquette/', props.frontmatter.tags)
})()

const date = props.frontmatter.date;

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
    <Cover v-if="cover" :cover="cover" />
    <div class="prose-container">
      <div v-if="date" class="article-date">
        Publié le {{ date }}
      </div>
      <slot />
    </div>
    <footer class="prose-container">
      <z-grid class="article-info ">
        <section v-if="category">
          <h1 class="article-info-title">Catégorie</h1>
          <router-link :to="category.to">
            {{ category.name }}
          </router-link>
        </section>
        <section v-if="tags">
          <h1 class="article-info-title">Étiquettes</h1>
          <span class="tags">
            <router-link
              v-for="tag in tags"
              :key="tag.to"
              :to="tag.to"
            >
              {{ tag.name }}
            </router-link>
          </span>
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
      </z-grid>
    </footer>
    <!-- @ajouter : auteur, date, tags, category, related_posts, aticle suivat / précedent-->
  </main>
</template>
<style scoped>
.article-info-title { @apply inline pr-2 uppercase text-xs text-gray-400; }
.article-info { @apply bg-white text-sm text-gray-500 font-light; }
.tags a:not(:last-child):after {
  content: ", ";
}
</style>
