<script setup>
import ProseContainer from '~/components/Layout/Container/Prose.vue'
import Blog from '~/components/Blog/Pagination.vue'
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <LayoutDefault>
    <ProseContainer>
      <slot/>
    </ProseContainer>
    <Blog :pagination="content.pagination"/>
  </LayoutDefault>
</template>
