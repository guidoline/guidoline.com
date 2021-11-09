<script>
export default {
  name: 'LayoutSimpleNewsletter'
}
</script>
<template>
  <LayoutSimple>
    <slot/>
    <div class="prose-container">
      [champ] <z-button type="primary" icon="at">S'abonner à la newsletter</z-button>
    </div>
  </LayoutSimple>
</template>
<script setup>
import LayoutSimple from '~/layouts/Simple.vue'
</script>
