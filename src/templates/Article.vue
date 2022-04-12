<script>
export default { name: 'TemplateArticle'}
</script>
<script setup>
// @note: l'idéal serait de placer les fichiers de template dans le
// repertoire `./src/pages(/<parent>)/<template>.vue`
import Cover from '~/components/Layout/Cover.vue'
import ArticleInfoItems from '~/components/Blog/Article/Info/Items.vue'
import ContainerProse from '~/components/Layout/Container/Prose.vue'
import BlogPagination from '~/components/Blog/Pagination.vue'
import { computed } from 'vue'
import { stringsToURL }from '~/services/utilities.js'
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})


/**
 * @todo: À transformer en filtre de modèle
 */

const cover = computed(() => {
  if (!props.content.cover) return null
  return {
    ...props.content.cover,
    // supcaption: `Publié le ${props.content.date}`
  }
})

const dateItem = computed(() => {
  return {
    name: props.content.formattedDate || props.content.date,
    to: `/blog/archives/${props.content.year}#${props.content.month}`
  }
})

/**
 * Author
 *
 * @todo Charger le contenu MD en relation (cf. related article)
 * @return Null | Object
 */
const author = computed(() => {
  if (!props.content.author) return null
  return { name: props.content.author }
})

</script>
<template>
<LayoutDefault>
  <main
    :class="content.cover ? `has-cover`: null"
  >
    <Cover v-if="cover" :cover="cover" />
    <ContainerProse>
      <slot />
    </ContainerProse>
    <footer class="container px-4">
      <section class="article-info">
        <z-grid>
        <ArticleInfoItems
          v-if="dateItem"
          title="Publié le"
          :items="[dateItem]"
        />
        <ArticleInfoItems
          v-if="content.category"
          title="Catégories"
          :items="[content.category]"
        />
        <ArticleInfoItems
          v-if="content.tags"
          title="Étiquettes"
          :items="content.tags"
        />
        </z-grid>
      </section>

    </footer>
    <!-- @ajouter : auteur, date, tags, category, related_posts, aticle suivat / précedent-->
    <BlogPagination :pagination="content.pagination"/>
  </main>
</LayoutDefault>
</template>
<style scoped>
.article-info-title { @apply inline pr-2 uppercase text-xs text-gray-400; }
.article-info { @apply bg-white text-gray-500 font-light mb-12; }
.article-info > section { @apply text-sm; }
</style>
