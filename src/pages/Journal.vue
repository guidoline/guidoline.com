<template>
  <LayoutDefault>
    <main class="prose-container">
      <h1>Journal</h1>
      <z-pagination
        route-prefix="/journal/"
        @change-folio="changePage($event)"
        :folio="folio"
        :folio-count="pagesCount"
      />
      <article
        v-for="route in articlesRoutes"
        :key="route.__vd_id"
      >
        <h2>
          <router-link :to="route.path">
            {{ route.meta.title || route.name }}
          </router-link>
        </h2>
        <small>{{ route.meta.date }}</small>
        <div v-html="route.meta.excerpt"/>
      </article>
      <z-pagination
        route-prefix="/journal/"
        @change-folio="changePage($event)"
        :folio="folio"
        :folio-count="pagesCount"
      />
      <z-grid>
        <p>
          {{ articlesCount }} articles
        </p>
        <p>
          Pages {{ folio }} / {{ pagesCount }}
        </p>
      </z-grid>
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
    type: Number,
    default: 1
  }
})
// const folio = ref(true)
// folio.value = false
// const { folio } = toRefs(props)
const router = useRouter()
const routes = router.getRoutes()
  .filter(r =>
    r.path.startsWith('/journal/') &&
    r.name !== 'journal-folio' &&
    r.name !== 'journal-[slug]' &&
    r.name !== 'journal-[year]'
    // ! r.name.startsWith('journal-page-')
  )
const articlesPerPage = 10
const articlesCount = routes.length
const pagesCount = Math.round(articlesCount / articlesPerPage)
const changePage = (folio) => {
  router.push({
    to: 'journal-folio',
    params: {
      folio
    }
  })
}


// Réactives
// const articlesOffset = computed(() => ((Number(folio)) - 1) * articlesPerPage)
const articlesOffset = computed(() => {
  return (props.folio - 1) * articlesPerPage
  return (((useRoute() ? useRoute().params.folio : 1 || 1 ) - 1) * articlesPerPage)
})
const articlesRoutes = computed(() =>
  routes
    .slice(articlesOffset.value, articlesOffset.value + articlesPerPage)
)
</script>
