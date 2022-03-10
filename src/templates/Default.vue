<script setup>
import ProseContainer from '~/components/Layout/Container/Prose.vue'
</script>
<script>
export default { name : 'TemplateDefault'}
</script>

<template>
  <ProseContainer>
    <slot/>
  </ProseContainer>
</template>
