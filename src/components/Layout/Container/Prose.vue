<template>
  <div class="container-prose">
    <slot />
  </div>
</template>
<style scoped>
.container-prose { @apply
  <sm:prose-sm
  sm:prose
  md:prose
  lg:prose-lg
  xl:prose-xl
  prose container mx-auto md:w-prose px-4 py-4;
}
</style>
