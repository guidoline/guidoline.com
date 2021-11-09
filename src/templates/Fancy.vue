<script>
export default { name : 'TemplateBlue'}
</script>
<script setup>
</script>
<template>
  <div class="fancy prose-container">
    <slot/>
  </div>
</template>
<style scoped>
.fancy { @apply bg-primary-500 text-white p6 }
</style>
