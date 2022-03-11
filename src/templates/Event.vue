<script setup>
import LayoutDefault from '~/layouts/Default.vue'
import ContainerProse from '~/components/Layout/Container/Prose.vue'
</script>
<template>
  <LayoutDefault>
    <ContainerProse>
      <slot />
      <pre>@todo: ajouter l'affichage des date et du lieu</pre>
    </ContainerProse>
  </LayoutDefault>
</template>
