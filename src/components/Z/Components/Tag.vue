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
.tag { @apply inline-block text-sm px-2 py-1 m-1 bg-day-background-dark text-day-text-dark no-underline; }
.tag.is-large { @apply text-base px-4 py-2 m-2; }
.tag.is-small { @apply text-xs; }
/* @note: les choix des couleurs n'est pas sûre. */
.tag.is-primary { @apply bg-main-primary text-main-light; }
.tag.is-secondary { @apply bg-main-secondary text-main-dark; }
.tag.is-accent { @apply bg-main-accent text-main-light; }
</style>
