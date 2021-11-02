<script setup>
import Header from '~/components/Layout/Header.vue'
import Footer from '~/components/Layout/Footer.vue'

// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/content/settings/navigation.json';
import setting_global from '@/content/settings/global.json';
defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})
</script>
<script>
export default { name: 'LayoutDefault' }
</script>
<template>
  <pre>layouts/Default.vue</pre>
  <Header />
  <slot/>
  <Footer>
    <template #subfooter>Mentions légales, etc…</template>
  </Footer>
</template>
