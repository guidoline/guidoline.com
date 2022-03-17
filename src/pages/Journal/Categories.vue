<script setup>
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Journal/Navigation.vue'

import { useArticlesStore } from '~/store/modules/articles.js'
const store = useArticlesStore()
store.initialize()
const categories = store.getCategories()
</script>
<template>
  <LayoutDefault>
        <Navigation />

    <main>
      <Title>Categories</Title>
      <div class="prose-container">
        <z-tag
          v-for="(category, index) in categories"
          :key="index"
          :tag="category"
        >
         {{ category.name }}
        </z-tag>
      </div>
    </main>
  </LayoutDefault>
</template>
