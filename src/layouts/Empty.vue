<script>
export default { name: 'LayoutEmpty' }
</script>
<script setup>
defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})
</script>
<template>
  <slot />
</template>
