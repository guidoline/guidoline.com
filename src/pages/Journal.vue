<template>
  <LayoutDefault>
    <main class="prose-container">
      <h1>Journal</h1>
      <p>
        {{ articlesCount }} articles <br>
        Pages {{ folio }} / {{ pagesCount }}
      </p>
      <router-link
        v-for="i in pagesCount"
        :key="i"
        :to="`/journal/${i}`"
      >
        page {{ i }}
      </router-link>
      <article
        v-for="(route, index) in articlesRoutes"
        :key="index"
      >
        <router-link :to="route.path">
          <h2>{{ route.meta.title || route.name }}</h2>
        </router-link>
        <small>{{ route.meta.date }}</small>
        <div v-html="route.meta.excerpt"/>
      </article>
    </main>
  </LayoutDefault>
</template>
<script>
export default { name: 'Journal' }
</script>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, toRefs } from 'vue'
// @todo: résoudre l'enigme de la prop non chargée au chargment de la page.
// Usage de `useRoute.params.folio` pour le moment
const props = defineProps({
  folio: {
    type: String,
    default: '1'
  }
})

// const { folio } = toRefs(props)
const routes = useRouter().getRoutes()
  .filter(r =>
    r.path.startsWith('/journal/') &&
    r.name !== 'journal-index' &&
    ! r.name.startsWith('journal-page-')
  )
  .reverse()
const articlesPerPage = 10
const articlesCount = routes.length
const pagesCount = Math.round(articlesCount / articlesPerPage)

// Réactives
// const articlesOffset = computed(() => ((Number(folio)) - 1) * articlesPerPage)
const articlesOffset = computed(() =>
  ((Number(useRoute().params.folio) || 1 ) - 1) * articlesPerPage)
const articlesRoutes = computed(() =>
  routes
    .reverse()
    .slice(articlesOffset.value, articlesOffset.value + articlesPerPage)
)
</script>
