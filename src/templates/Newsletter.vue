<script setup>
import LayoutDistractionFree from '~/layouts/DistractionFree.vue'
import ContainerProse from '~/components/Layout/Container/Prose.vue'
</script>
<template>
  <LayoutDistractionFree>
    <ContainerProse>
      <slot />
      <pre>@todo: ajouter le widget d'inscription à la newsletter</pre>
      [champ texte] <z-button>S'inscire</z-button>
    </ContainerProse>
  </LayoutDistractionFree>
</template>
