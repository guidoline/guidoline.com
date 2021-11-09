<template>
  <figure class="cover">
    <img :src="cover.src" :alt="cover.alt"/>
    <figcaption
      v-if="cover.legend"
    >
      <div v-html="cover.legend" />
      <z-button
        v-if="cover.link.href"
        :to="cover.link.href"
        :icon="cover.link.icon"
        :type="cover.link.color"
      >
        {{ cover.link.text }}
      </z-button>
    </figcaption>
  </figure>
</template>
<script>
export default { name: 'Cover' }
</script>
<script setup>
defineProps({
  cover: {
    type: Object,
    required: true
  }
})
</script>
<style scoped>
.cover { @apply relative min-h-60vh overflow-hidden; }
.cover img { @apply absolute w-full h-full object-cover ; }
.cover figcaption { @apply absolute bottom-4 left-4 p-4 bg-white; }
</style>
