<script setup>
import ContainerProse from '~/components/Layout/Container/Prose.vue'
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <LayoutDefault>
    <ContainerProse>
      <main v-if="content" v-html="content.content"/>
    </ContainerProse>
  </LayoutDefault>
</template>
