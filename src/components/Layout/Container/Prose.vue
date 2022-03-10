<template>
  <div class="container-prose">
    <slot />
  </div>
</template>
<style scoped>
.container-prose { @apply prose container mx-auto md:w-prose px-4 py-4; }
</style>
