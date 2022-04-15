<script setup>
import FooterSub from '~/components/Layout/Footer/Sub.vue'
import { computed } from 'vue'
defineProps({
  content: {
    type: Object,
    required: true,
  },
})
const year = computed(() => new Date().getFullYear())
const print = () => {
  window.print()
  // document.getElementById('print-zone').print()
  // var prtContent = document.getElementById('print-zone');
  // var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  // WinPrint.document.write(prtContent.innerHTML);
  // WinPrint.document.close();
  // WinPrint.focus();
  // WinPrint.print();
  // WinPrint.close();
}
</script>
<template>
  <!-- Distraction free layout -->
  <nav class="navigation">
    <p>
      <z-button
        type="light"
        icon="ArrowLeft"
        href="/blog"
        class="dark:text-night-text-dark"
        @click.prevent="$router.back()"
      >
        Retour
      </z-button>
    </p>
    <p>
      <z-button
        type="light"
        icon="Printer"
        class="dark:text-night-text-dark"
        @click.prevent="print()"
      >
        Imprimer
      </z-button>
    </p>
  </nav>
  <p
    class="only-print italic"
    style="
      margin-bottom: 3rem;
      font-size: 0.6rem !important;
      line-height: 0.8rem !important;
    "
  >
    © Guidoline {{ year }} (https://guidoline.com)
    <br />
    ! Astuce : imprimez en mode brouillon pour économiser de l'encre !
  </p>
  <main style="min-height: calc(100vh - 8rem)" class="print-zone">
    <slot />
  </main>
  <FooterSub />
</template>
<style scoped>
.only-print {
  display: none;
}
@media print {
  :not(.print-zone) {
    line-height: 0;
    visibility: hidden;
    margin: 0;
    padding: 0;
    height: 0;
    max-height: 0;
  }
  .only-print,
  .print-zone :deep(*) {
    color: rgb(41, 41, 84) !important;
    visibility: visible;
    font-size: 1rem !important;
    line-height: 1.2rem;
    min-width: 100%;
    padding: 0 !important;
  }
  .print-zone :deep(h1) {
    font-weight: bold !important;
  }
  .print-zone :deep(p) {
    margin-bottom: 1.2rem !important;
  }
  .print-zone :deep(a[href^='http']:after) {
    font-size: 0.6rem;
    content: ' < ' attr(href) ' > ';
  }
  .print-zone :deep(img) {
    display: none;
  }
  .print-zone {
    width: 100% !important;
    margin: 0;
  }
  .only-print {
    display: block !important;
  }
}

nav {
  @apply p-4 flex flex-wrap justify-between items-center;
  @apply md:(absolute w-full h-12 py-0 z-1 bg-white top-0 left-0 right-0 bg-opacity-60 transition-colors  hover:(bg-opacity-100));
}
/* Pose des soucis pour que la couverture pousse le contenu suivant. */
nav + :deep(*:not(.has-cover)) {
  @apply mt-12;
}
</style>
