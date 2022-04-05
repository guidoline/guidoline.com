<template>
  <component :is="heroIcons[currentIcon]" class="icon"/>
</template>
<script setup>
// https://heroicons.com/
// @todo : prévoir un screen reader ? cf. z-button
// @todo : inclure la librairie d'icônes dans le plugin
import * as heroIcons from '@heroicons/vue/outline'
import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    default: null
  }
})
const currentIcon = computed(() => {
  if (!props.icon) return null
  return `${props.icon}Icon`
})
</script>
<style scoped>
.icon { @apply h-5 w-5 mx-0.5 inline; }
</style>
