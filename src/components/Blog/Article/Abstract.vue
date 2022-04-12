<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <article class="article" :class="`category-${article.template} ${article.hasCover ? 'is-covered' : ''}`">
    <figure
      v-if="article.hasCover"
      class="md:col-span-2 article-cover"
    >
      <img
        :src="article.cover.src"
        :atl="article.cover.alt"
        />
        <figcaption v-if="article.cover.legend">
          {{ article.cover.credit }}
        </figcaption>
    </figure>
    <div class="md:col-span-3" >
      <z-tag
        v-if="article.category"
        :to="article.category.to"
        class="is-small is-secondary"
      >
        {{ article.category.name }}
      </z-tag>
      <div v-if="article.tags" class="tags">
        <z-tag
          v-for="(tag, index) in article.tags"
          :key="index"
          :to="tag.to"
          class="is-small"
        >
          {{ tag.name }}
        </z-tag>
      </div>
      <h2 class="article-title">
        <router-link :to="article.path">
          {{ article.title || article.name }}
        </router-link>
      </h2>
      <template v-if="article.date">
        <small>Publié le {{ article.formattedDate }}</small>
      </template>
      <div v-html="article.excerpt" class="last:mb-0" />
      <footer>
        <small>
          <details>
            <summary>debug</summary>
            <pre>{{ article }}</pre>
          </details>
        </small>
      </footer>
    </div>
  </article>
</template>
<style scoped>

.article { @apply mb-4 grid gap-4 px-4 mx-auto max-w-64ch md:(max-w-none grid-cols-6 px-6) md:(px-8) xl:(grid-cols-8) xl:(max-w-screen-2xl ml-0); }
.article:not(.is-covered) > * { @apply md:col-start-2 lg:col-start-3 xl:col-start-4; }
/* .dead-col { @apply bg-teal-50; } */
.article-cover { @apply my-0 w-full md:col-start-2 xl:col-start-3; }
.article-title { @apply mt-0; }
.article-cover img{ @apply w-full h-full max-h-68 object-cover; }

/* .article .dead-col-left { @apply md:col-span-2 lg-bg-gray-0; } */
/* .article.is-covered .dead-col-left { @apply md:col-span-1; } */
.article.category-article .article-cover{ @apply md:col-span-3 xl:col-span-4; }
/* .article.category-article.is-covered .dead-col-left { @apply hidden md:col-span-1; } */
/* @todo: mettre l'article à l'intérieur de la grille afin les conflits entre les espacment d'encarts de sécurité de la grille et la gestion des fonds, espaces bancs et bordures de l'article. */
.article.category-fancy { @apply py-4 bg-teal-100 ; }
.article.category-fancy .article-cover{ @apply md:col-span-3 xl:col-span-5; }
.article.category-fancy .article-cover img { @apply md:max-h-96; }
/* .article.category-fancy .dead-col-left { @apply md:hidden; } */
.article :deep(h2),
.article :deep(p) { @apply my-2;}
</style>
