<style scoped>
section {
  @apply p-4;
  @apply text-insert-texte bg-insert-background;
  @apply dark:bg-night-background-dark;
}
section.primary {
  @apply text-callout-text bg-callout-background;
}
section.primary.prose a {
    @apply text-callout-text;
  }

section.secondary {
  @apply text-callout-text bg-callout-background;
}
section.accent {
  @apply text-callout-text bg-callout-background;
}
</style>
<template>
  <section class="prose">
    <slot />
  </section>
</template>
