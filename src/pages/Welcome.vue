<script setup>
// Données additionnelles
// import { computed } from 'vue'
// import { useContentsStore } from '~/store/modules/contents.js'
// const sixLastArticles = computed(() => useContentsStore().lastArticles(6))

defineProps({
  content: {
    type: Object,
    default: null
  }
})


</script>
<template>
  <LayoutHome :content="content">
    <div v-if="content" v-html="content.content"/>
  </LayoutHome>
</template>
