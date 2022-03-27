<script setup>
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Journal/Navigation.vue'
import { useArticlesStore } from '~/store/modules/articles.js'
const store = useArticlesStore()
store.initialize()
const tags = store.getTags()
</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Étiquettes</Title>
      <div class="prose container">
        <z-tag
          v-for="(tag, index) in tags"
          :key="index"
          :to="tag.to"
          class="is-large is-secondary"
        >
         {{ tag.name }}
        </z-tag>
      </div>
    </main>
  </LayoutDefault>
</template>
