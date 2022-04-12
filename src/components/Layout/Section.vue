<style scoped>
section {
  @apply p-4;
  @apply text-insert-text bg-insert-background-light;
  @apply dark:bg-night-background-dark;
}
section :deep(h1),
section :deep(ul),
section :deep(p) {
  @apply  pb-2;
}
section :deep(ul) {
  @apply ml-4 list-disc;
}
section :deep(h1) {
  @apply text-2xl;
}

section :deep(h1),
section :deep(strong),
section :deep(strong a),
section :deep(a) {
  @apply text-insert-text-dark dark:text-night-text-dark;
}

section.primary { @apply text-callout-text bg-callout-background; }
section.primary :deep(h1),
section.primary :deep(strong),
section.primary :deep(strong a),
section.primary :deep(a) {
    @apply text-callout-text;
}

</style>
<template>
  <section>
    <slot />
  </section>
</template>
