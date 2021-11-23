<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <LayoutDefault>
    <main class="prose-container">
      <div v-html="content.content"/>
    </main>
  </LayoutDefault>
</template>
