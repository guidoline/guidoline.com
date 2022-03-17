<script setup>
import ArticleAbstract from '~/components/Journal/Article/Abstract.vue'
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Journal/Navigation.vue'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useArticlesStore } from '~/store/modules/articles'

const props = defineProps({
  folio: {
    type: Number,
    default: 1
  }
})

const store = useArticlesStore()
store.initialize()

// Pagination
const limit = ref(10)
const offset = computed(() => (props.folio - 1 ) * limit.value)
const articles = computed(() => store.getArticles)
const articlesCount = articles.value.length
const pagesCount = computed(() => Math.ceil(articlesCount / limit.value))
const paginateArticles = computed(() => articles.value.slice(offset.value, offset.value + limit.value))

const router = useRouter()
const changePage = (folio) => {
  router.push({
    to: 'journal-folio',
    params: {
      folio
    }
  })
}

</script>

<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Journal</Title>
      <z-pagination
        route-prefix="/journal/"
        @change-folio="changePage($event)"
        :folio="folio"
        :folio-count="pagesCount"
      />
      <ArticleAbstract
        class="prose"
        v-for="article in paginateArticles"
        :key="article.__vd_id"
        :article="article"
      />
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
