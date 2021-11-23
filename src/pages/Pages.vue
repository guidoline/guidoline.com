<script setup>
defineProps({
  content: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <LayoutDefault :content="content">
    <main class="prose-container">
      <div v-if="content" v-html="content.content"/>
    </main>
  </LayoutDefault>
</template>
