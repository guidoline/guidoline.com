<script>
export default {
  name: 'TemplateNewsletter'
}
</script>
<template>
  <div class="prose-container">
    <slot/>
    [champ] <z-button type="primary" icon="at">S'abonner à la newsletter</z-button>
  </div>
</template>
<script setup>
import LayoutSimple from '~/layouts/Simple.vue'
</script>
