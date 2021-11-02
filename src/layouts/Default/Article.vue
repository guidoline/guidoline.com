<script>
export default {
  name: 'LayoutDefaultArticle'
}
/**
 * Note:
 * Éviter de devoir invoquer le layout ici
 * Tester une stratégie à la gridsome/nuxt :
 * `./src/pages/Journal/[slug].vue`
 */
</script>
<script setup>
import JournalSlug from '~/pages/Journal/[slug].vue'
</script>
<template>
  <JournalSlug>
  <pre>layouts/templates/Default/Article.vue</pre>
  <slot/>
  </JournalSlug>
</template>
