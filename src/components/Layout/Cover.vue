<template>
  <figure class="cover">
    <img v-if="cover.src" :src="cover.src" :alt="cover.alt"/>
    <figcaption
      v-if="cover.legend"
    >
      <div class="cover-supcaption" v-if="cover.supcaption">{{ cover.supcaption }}</div>
      <div class="cover-legend" v-html="markdownify(cover.legend)" />
      <z-button
        v-if="hasLink"
        :to="cover.link.href"
        :icon="cover.link.icon"
        type="filled"
        :class="cover.link.color"

      >
        {{ cover.link.text }}
      </z-button>
      <div class="cover-credit" v-if="cover.credit">{{ cover.credit }}</div>
    </figcaption>
  </figure>
</template>
<script>
import { computed } from 'vue'
import { markdownify } from '~/services/utilities'
export default { name: 'Cover' }
</script>
<script setup>
const props = defineProps({
  cover: {
    type: Object,
    required: true
  }
})
const hasLink = computed(() => {
  if (!props.cover.link) return false
  return props.cover.link.href

})
</script>
<style scoped>
.cover { @apply relative min-h-70 max-h-60vh overflow-hidden; }
.cover.is-full { @apply absolute top-0 w-full h-100vh min-h-94; }
.cover.is-full :deep(+ *) { @apply mt-100vh; }
.cover img { @apply w-full min-h-25rem object-cover; }
.cover.is-full img { @apply absolute h-full min-h-100vh; }
.cover figcaption { @apply absolute bottom-4 left-4 p-4 bg-day-background text-day-text; }
.cover figcaption :deep(h1) { @apply text-6xl font-medium mb-1; }
.cover-supcaption { @apply pb-2 text-sm text-day-quiet uppercase; }
.cover-legend { @apply text-day-text; }
.cover-legend :deep(h2) { @apply text-lg font-bold; }
.cover-legend :deep(p) { @apply mb-4; }
.cover-legend:last-child :deep(p) { @apply mb-0;}
.cover-credit { @apply text-sm italic text-day-background-darker mt-2; }
.cover.is-full figcaption { @apply mr-4 bottom-20 md:(max-w-screen-sm); }
</style>
