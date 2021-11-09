<template>
  <nav>
    <p>
      <z-button type="light" icon="ArrowLeft" href="/journal" @click.prevent="$router.back()">Retour</z-button>
    </p>
    <p>
      <z-button type="light" icon="DocumentDownload" >
        Télécharger en PDF
      </z-button>
      <z-button type="light" icon="Printer" >
        Imprimer
      </z-button>
    </p>
  </nav>
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
<style scoped>
nav { @apply m-4 flex flex-wrap justify-between items-center }
</style>
