<script setup>
import ArticleAbstract from '~/components/Blog/Article/Abstract.vue'
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Blog/Navigation.vue'
import Footer from '~/components/Blog/Footer.vue'
import { computed, ref} from 'vue'
import { useRouter } from 'vue-router'
import { useArticlesStore } from '~/store/modules/articles.js'

const props = defineProps({
  tag: {
    type: String,
    required: true
  },
  folio: {
    type: Number,
    default: 1
  }
})

const store = useArticlesStore()
store.initialize()

// Pagination
const articles = computed(() => store.getTagArticles(props.tag))
const articlesCount = articles.value.length
const limit = ref(10)
const folio = computed(() => props.folio > articlesCount
  ? Math.ceil(articlesCount / limit.value)
  : props.folio
)

const offset = computed(() => (props.folio -1) * limit.value)
const pagesCount = computed(() => Math.ceil(articlesCount / limit.value))
const paginateArticles = computed(() => articles.value.slice(offset.value, offset.value + limit.value))

const router = useRouter()
const changePage = (folio) => {
  router.push({
    to: 'blog-tag',
    params: {
      tag: props.tag,
      folio
    }
  })
}

// Tag name
const obTag = computed(() => store.getTags().find(c => c.slug === props.tag))
</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Étiquette «&nbsp;<strong>{{ obTag.name }}</strong>&nbsp;»</Title>
      <z-pagination
        :route-prefix="`/blog/etiquette/${tag}/`"
        @change-folio="changePage($event)"
        :folio="folio"
        :folio-count="pagesCount"
      />
      <ArticleAbstract
        class="prose"
        v-for="article in paginateArticles"
        :key="article.path"
        :article="article"
      />
      <Footer
        :articles-count="articlesCount"
        :pages-count="pagesCount"
        :current-folio="folio"
      />
    </main>
  </LayoutDefault>
</template>
