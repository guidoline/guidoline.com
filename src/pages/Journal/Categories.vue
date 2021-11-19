<script setup>
import Title from '~/components/Layout/Title.vue'
import { useArticlesStore } from '~/store/modules/articles.js'
const store = useArticlesStore()
store.initialize()
const categories = store.getCategories()
</script>
<template>
  <LayoutDefault>
    <main class="prose">
      <Title>Categories</Title>
      <div class="container">
        <z-tag
          v-for="(category, index) in categories"
          :key="index"
          :tag="category"
        >
         {{ category.name }}
        </z-tag>
      </div>
    </main>
  </LayoutDefault>
</template>
