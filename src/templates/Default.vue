<script setup>
import ProseContainer from '~/components/Layout/Container/Prose.vue'
import JournalPagination from '~/components/Journal/Pagination.vue'
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
    <JournalPagination :pagination="content.pagination"/>
  </LayoutDefault>
</template>
