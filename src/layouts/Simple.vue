<template>
  <p>
    <z-button type="light" icon="ArrowLeft" href="/journal" @click.prevent="$router.back()">Retour</z-button>
  </p>
  <slot />
</template>
<script>
export default{
  name: 'LayoutSimple'
}
</script>
<script setup>
defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})
</script>
