<script setup>
import { computed } from 'vue'
import { name, about, contacts, categories as _categories } from '@/content/settings/global.json'
import { useContentsStore } from '~/store/modules/contents.js'

const year = computed(() => (new Date()).getFullYear())
const contentStore = useContentsStore()
contentStore.initialize()
const sitemap = contentStore.pages
  .map(r => ({
    text: r.title || r.name,
    to: r.path
  }))
</script>
<style scoped>
.sub-footer {
  @apply justify-center items-center text-center p-4 text-xs italic text-day-text-lighter;
  @apply md:(flex);
  p { @apply mb-2 md:mb-0; }
}
</style>
<template>
  <section class="sub-footer">
    <p>Tout droits réservés © {{name}} {{year}}</p>
    <z-menu :links="sitemap" type="text" linkClasses="text"/>
  </section>
</template>
