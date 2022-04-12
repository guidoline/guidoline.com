<script setup>
defineProps({
  content: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <!-- Renommer `LayoutMarkdown` par `TemplateLoader` plus cohérent -->
  <LayoutMarkdown :content="content">
    <div v-html="content.content" />
    <slot/>
  </LayoutMarkdown>
</template>
