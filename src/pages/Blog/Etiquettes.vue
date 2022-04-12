<script setup>
import Title from '~/components/Layout/Title.vue'
import Navigation from '~/components/Blog/Navigation.vue'
import { computed } from 'vue'
import { useArticlesStore } from '~/store/modules/articles.js'
const store = useArticlesStore()
store.initialize()
const tags = computed(() => store.getTags())
</script>
<template>
  <LayoutDefault>
    <Navigation />
    <main>
      <Title>Étiquettes</Title>
      <div class="prose container">
        <template v-if="tags.length">
          <z-tag
            v-for="(tag, index) in tags"
            :key="index"
            :to="tag.to"
            class="is-large is-secondary"
          >
          {{ tag.name }}
          </z-tag>
        </template>
        <p v-else class="text-center italic">
          Aucune publication.
        </p>
      </div>
    </main>
  </LayoutDefault>
</template>
