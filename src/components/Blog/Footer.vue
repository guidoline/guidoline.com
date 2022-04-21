<script setup>
defineProps({
  articlesCount: {
    type: Number,
    required: true
  },
  pagesCount: {
    type: Number,
    required: true
  },
  currentFolio: {
    type: Number,
    required: true
  }
})
</script>
<style scoped>
footer {
  @apply px-12 text-sm italic text-day-quiet;
}
</style>
<template>
  <footer>
    <z-grid>
      <p>
        {{ articlesCount }} articles
      </p>
      <p class="text-right">
        Pages {{ currentFolio }} / {{ pagesCount }}
      </p>
    </z-grid>
  </footer>
</template>
