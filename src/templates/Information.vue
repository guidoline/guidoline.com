<script setup>
import LayoutDistractionFree from '~/layouts/DistractionFree.vue'
import ContainerProse from '~/components/layout/Container/Prose.vue'
</script>
<template>
  <LayoutDistractionFree>
    <ContainerProse>
      <slot/>
    </ContainerProse>
  </LayoutDistractionFree>
</template>
