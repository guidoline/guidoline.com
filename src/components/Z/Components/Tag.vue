<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>
<template>
  <router-link
      class="tag"
      :to="to"
    >
      <slot/>
  </router-link>
</template>
<style scoped>
.tag { @apply inline-block text-xs px-2 py-1 m-1 no-underline bg-gray-100; }
</style>
