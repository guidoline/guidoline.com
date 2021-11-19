<script setup>
import Title from '~/components/Layout/Title.vue'
import { useArticlesStore } from '~/store/modules/articles.js'
const store = useArticlesStore()
store.initialize()
const tags = store.getTags()
</script>
<template>
  <LayoutDefault>
    <main class="prose">
      <Title>Étiquettes</Title>
      <div class="container">
        <z-tag
          v-for="(tag, index) in tags"
          :key="index"
          :tag="tag"
        >
         {{ tag.name }}
        </z-tag>
      </div>
    </main>
  </LayoutDefault>
</template>
<style scoped>
.tag { @apply inline-block px-4 py-2 m-2 bg-gray-100; }
</style>
