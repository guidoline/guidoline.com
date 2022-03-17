<script setup>
/**
 * Sous navigation
 *
 * Exemple d'usages : chemin de petites miettes de pain (breadcrumb :D),
 * navigation secondaire, etc.
 */
</script>
<template>
  <div class="sub-navigation">
    <slot/>
  </div>
</template>
<style scoped>
.sub-navigation { @apply py-4; }
</style>
