<template>
  <component :is="currentIcon" class="icon"/>
</template>
<script setup>
// https://heroicons.com/
// Icônes des réseaux sociaux : https://simpleicons.org/
// @todo : prévoir un screen reader ? cf. z-button
// @todo : inclure la librairie d'icônes dans le plugin
import * as heroIcons from '@heroicons/vue/outline'

import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: [String, Object],
    default: null
  }
})
const currentIcon = computed(() => {
  // Custom icon
  if (props.icon instanceof Object) return props.icon
  // Heoricon
  if (!props.icon) return null
  return heroIcons[`${props.icon}Icon`]
})
// const icons = computed(() => heroIcons)
// const iconIsObject = computed(() => props.icon instanceof Object )

</script>
<style scoped>
.icon { @apply h-5 w-5 mx-0.5 inline; }
</style>
