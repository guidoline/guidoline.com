<script setup>
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Journal/Navigation.vue'
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
</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Archives année «&nbsp;{{ currentYearArchives.name }}&nbsp;»</Title>
      <div class="prose container">
        <router-link
          v-for="(year, index) in years"
          :key="index"
          :to="`/journal/archives/${year}`"
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
      </div>
    </main>
  </LayoutDefault>
</template>
