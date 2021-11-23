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
  content: {
    type: Object,
    default: {}
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

const date = props.content.date;

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
  <main
    :class="content.cover ? `has-cover`: null"
  >
    <Cover v-if="cover" :cover="cover" />
    <div class="prose-container">
      <div v-if="date" class="article-date">
        Publié le {{ date }}
      </div>
      <slot />
    </div>
    <footer class="">
      <z-grid class="article-info prose-container ">
        <section v-if="content.category">
          <h1 class="article-info-title">Catégorie</h1>
          <router-link :to="content.category.to">
            {{ content.category.name }}
          </router-link>
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
        <section v-if="content.tags" class="col-span-full">
          <h1 class="article-info-title">Étiquettes</h1>
          <span class="tags">
            <router-link
              v-for="tag in content.tags"
              :key="tag.to"
              :to="tag.to"
            >
              {{ tag.name }}
            </router-link>
          </span>
        </section>
      </z-grid>
      <section>
        <z-grid>
          <div>
            <z-button
              :to="content.pagination.previous.to"
              icon="ChevronLeft"
            >
              {{ content.pagination.previous.name }}
            </z-button>
          </div>
          <div>
            <z-button
              :to="content.pagination.next.to"
              icon-right="ChevronRight"
              style="float: right"
            >
              {{ content.pagination.next.name }}
            </z-button>
          </div>
        </z-grid>
      </section>
    </footer>
    <!-- @ajouter : auteur, date, tags, category, related_posts, aticle suivat / précedent-->
  </main>
</template>
<style scoped>
.article-info-title { @apply inline pr-2 uppercase text-xs text-gray-400; }
.article-info { @apply bg-white text-gray-500 font-light mb-12; }
.article-info > section { @apply text-sm; }
.tags a:not(:last-child):after {
  content: ", ";
}
</style>
