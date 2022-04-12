<script setup>
import ArticleAbstract from '~/components/Blog/Article/Abstract.vue'
import Title from '~/components/Layout/Title.vue'
import Navigation  from '~/components/Blog/Navigation.vue'
import Footer from '~/components/Blog/Footer.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useArticlesStore } from '~/store/modules/articles.js'

const props = defineProps({
  category: {
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

// Pagination /!\ au SSG
const limit = ref(10)
const offset = computed(() => (props.folio - 1) * limit.value)
const articles = computed(() => store.getCategoryArticles(props.category))
const articlesCount = articles.value.length
const pagesCount = computed(() => Math.ceil(articlesCount / limit.value))
const paginateArticles = computed(() => articles.value.slice(offset.value, offset.value + limit.value))

const router = useRouter()
const changePage = (folio) => {
  router.push({
    to: 'blog-category',
    params: {
      category: props.category,
      folio
    }
  })
}

// Category name
const obCategory = computed(() => store.getCategories().find(c => c.slug === props.category))

</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Catégorie «&nbsp;<strong>{{ obCategory.name }}</strong>&nbsp;»</Title>
      <z-pagination
        :route-prefix="`/blog/categorie/${category}/`"
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
