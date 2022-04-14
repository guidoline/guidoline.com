<script setup>
import FooterSub from '~/components/Layout/Footer/Sub.vue'
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <!-- Distraction free layout -->
  <nav class="navigation">
    <p>
      <z-button type="light" icon="ArrowLeft" href="/blog" @click.prevent="$router.back()">Retour</z-button>
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
  <main style="min-height: calc(100vh - 8rem)">
    <slot />
  </main>
  <FooterSub />
</template>
<style scoped>
nav {
  @apply p-4 flex flex-wrap justify-between items-center;
  @apply md:(absolute w-full h-12 py-0 z-1 bg-white top-0 left-0 right-0 bg-opacity-60 transition-colors  hover:(bg-opacity-100));
}
/* Pose des soucis pour que la couverture pousse le contenu suivant. */
nav + :deep(*:not(.has-cover)) { @apply mt-12 }
</style>
