<script setup>
import ArticleAbstract from '~/components/Blog/Article/Abstract.vue'
import Navigation from '~/components/Blog/Navigation.vue'
import Title from '~/components/Layout/Title.vue'
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
const limit = ref(2)
const offset = computed(() => (props.folio -1) * limit.value)
const articles = computed(() => store.getTagArticles(props.tag))
const articlesCount = articles.value.length
const pagesCount = computed(() => Math.ceil(articlesCount / limit.value))
const paginateArticles = computed(() => articles.value.slice(offset.value, offset.value + limit.value))

const router = useRouter()
const chanPage = (folio) => {
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
      <div class="container">
        <z-pagination
          :route-prefix="`/blog/etiquettes/${tag}/`"
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
      </div>
    </main>
  </LayoutDefault>
</template>
