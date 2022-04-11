<style scoped>
/*
 * Soucis lorsque el dernier item est masqué, `last` est quand même
 * calculé et donc la marge droite et tout de même supprimé.
 * cf. fusion des marges
 */
.item { @apply py-2 pl-2 last:pr-2 sm:(py-4 pl-4 last:pr-4); }
</style>
<template>
  <div class="item">
    <slot/>
  </div>
</template>
