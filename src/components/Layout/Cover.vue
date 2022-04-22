<template>
  <figure class="cover">
    <img v-if="cover.src" :src="cover.src" :alt="cover.alt"/>
    <figcaption
      v-if="cover.legend"
    >
      <div class="caption-wrapper">
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
      </div>
      <div class="cover-credit" v-if="cover.credit" v-html="markdownify(cover.credit)" />
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
.cover { @apply relative min-h-102 max-h-60vh overflow-hidden; }
.cover.is-full { @apply absolute top-0 w-full h-100vh min-h-94; }
.cover.is-full :deep(+ *) { @apply mt-100vh; }
.cover.is-full img { @apply absolute h-full min-h-100vh; }
.cover img {
  @apply w-full min-h-25rem object-cover;
  @apply absolute;
}
.cover figcaption {
  @apply absolute top-4 left-4 right-4 bottom-4;
}
.cover .caption-wrapper {
  @apply w-max px-3 py-2 bg-day-background text-day-text;
}
.cover figcaption :deep(h1) { @apply text-6xl font-medium mb-1; }
.cover-supcaption { @apply pb-2 text-sm text-day-quiet uppercase; }
.cover-legend { @apply text-day-text; }
.cover-legend :deep(h2) { @apply text-lg font-bold; }
.cover-legend :deep(p) { @apply mb-4; }
.cover-legend:last-child :deep(p) { @apply mb-0;}
/* Crédit photo, idéalement : watermark en bas à droite -90° */
.cover-credit {
  @apply text-xs font-light italic subpixel-antialiasing mt-2 pb-1 px-2;
  @apply text-night bg-night-background-dark bg-opacity-50;
  @apply absolute right-0 bottom-0;
  transform: rotate(-90deg) translateX(100%);
  transform-origin: 100% 100%;
  &:deep(a) {
    @apply text-night underline;
  }
}

.cover.is-full figcaption { @apply mr-4 bottom-20 md:(max-w-screen-sm); }
</style>
