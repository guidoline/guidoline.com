<script setup>
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Blog/Navigation.vue'
import { computed } from 'vue'

import { useArticlesStore } from '~/store/modules/articles.js'
const store = useArticlesStore()
store.initialize()
const categories = computed(() => store.getCategories())
</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Categories</Title>
      <div class="prose container">
        <template v-if="categories.length">
          <z-tag
            v-for="(category, index) in categories"
            :key="index"
            :to="category.to"
            class="is-large is-secondary"
          >
          {{ category.name }}
          </z-tag>
        </template>
        <p v-else class="text-center italic">
          Aucune publication.
        </p>
      </div>
    </main>
  </LayoutDefault>
</template>
