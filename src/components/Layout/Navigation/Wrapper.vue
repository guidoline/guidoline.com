<style scoped>
/**
 * Conteneur pour une barre de navigation
 *
 * Fonctionne de pair avec `NavigationItem`.
 */
.wrapper,
.left,
.center,
.right { @apply flex flex-wrap justify-between items-center; }
.left { @apply justify-left; }
.center { @aaply justify-center;}
.right { @apply justify-right; }
</style>
<template>
  <div class="wrapper">
    <div class="left"><slot name="left" /></div>
    <div class="center"><slot /></div>
    <div class="right"><slot name="right"/></div>
  </div>
</template>
