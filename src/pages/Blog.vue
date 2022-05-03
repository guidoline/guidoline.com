<script setup>
import ArticleAbstract from '~/components/Blog/Article/Abstract.vue'
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Blog/Navigation.vue'
import BlogFooter from '~/components/Blog/Footer.vue'

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
const articles = computed(() => store.getArticles)
const articlesCount = articles.value.length
const limit = ref(10)
const folio = computed(() => props.folio > articlesCount
  ? Math.ceil(articlesCount / limit.value)
  : props.folio
)
const offset = computed(() => (folio.value - 1 ) * limit.value)
const pagesCount = computed(() => Math.ceil(articlesCount / limit.value))
const paginateArticles = computed(() => articles.value.slice(offset.value, offset.value + limit.value))

const router = useRouter()
const changePage = (folio) => {
  router.push({
    to: 'blog-index',
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
      <Title>Blog</Title>
      <z-pagination
        route-prefix="/blog/"
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
        route-prefix="/blog/"
        @change-folio="changePage($event)"
        :folio="folio"
        :folio-count="pagesCount"
      />
      <BlogFooter
        :articles-count="articlesCount"
        :pages-count="pagesCount"
        :current-folio="folio"
      />
    </main>
  </LayoutDefault>
</template>
