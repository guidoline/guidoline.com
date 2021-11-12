<template>
  <nav class="navigation">
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
import { computed } from 'vue'
// Free distraction layout
export default{
  name: 'LayoutSimple'
}
</script>
<script setup>
const props = defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})
</script>
<style scoped>
nav {
  @apply p-4 flex flex-wrap justify-between items-center;
  @apply md:(absolute w-full h-12 py-0 z-1 bg-white top-0 left-0 right-0 bg-opacity-60 transition-colors  hover:(bg-opacity-100));
}
/* Pose des soucis pour que la couverture pousse le contenu suivant. */
nav + :deep(*:not(.has-cover)) { @apply mt-12 }
</style>
