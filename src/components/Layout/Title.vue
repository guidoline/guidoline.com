<style scoped>
h1 { @apply text-center pt-8 font-serif italic tracking-wide text-shadow-sm; }
@screen md {
  h1:before,
  h1:after { content: " — "; @apply font-thin ; }
}
</style>
<template>
  <h1>
    <slot />
  </h1>
</template>
