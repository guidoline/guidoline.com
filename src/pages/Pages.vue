<script setup>
import ContainerProse from '~/components/Layout/Container/Prose.vue'
defineProps({
  content: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <LayoutDefault :content="content">
    <ContainerProse>
      <div v-if="content" v-html="content.content"/>
    </ContainerProse>
  </LayoutDefault>
</template>
