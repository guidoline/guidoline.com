<script setup>
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Blog/Navigation.vue'
import { useArticlesStore } from '~/store/modules/articles.js'
import { computed } from 'vue'
const props = defineProps({
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    default: null
  }
})

const store = useArticlesStore()
store.initialize()
const archives = computed(() => {
  return store.articlesByDate()
})
const years = computed(() => Object.keys(archives.value).reverse())
// Pagination par année et mois
const currentYear = computed(() => props.year || years.value[0])
const currentYearArchives = computed(() => archives.value[currentYear.value])
const hasArticles = computed(() => Object.keys(archives.value).length >= 1)
</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title v-if="hasArticles">Archives année «&nbsp;{{ currentYearArchives.name }}&nbsp;»</Title>
      <Title v-else>Archives</Title>
      <div class="prose container">
        <template v-if="hasArticles">
          <router-link
            v-for="(year, index) in years"
            :key="index"
            :to="`/blog/archives/${year}`"
            class="px-2"
          >
            {{ year }} 
          </router-link>
          <ul>
            <li
              v-for="(month, key) in currentYearArchives.months"
              :key="`${currentYearArchives.name}-${month.name}`"
              :id="key"
            >
              {{ month.name }} {{ currentYearArchives.name }}
              <ul>
                <li
                  v-for="article in month.articles"
                  :key="article.path"
                >
                  <router-link
                    :to="article.path"
                  >
                    {{ article.title }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </template>
        <p v-else class="text-center italic">
          Aucun articles.
        </p>
      </div>
    </main>
  </LayoutDefault>
</template>
