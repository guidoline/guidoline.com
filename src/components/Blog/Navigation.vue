<script setup>
import SubNav from '~/components/Layout/Navigation/SubNav.vue'
const links = [
  {
    text: 'Articles',
    to: '/blog/'
  },
  {
    text: 'Catégories',
    to: '/blog/categories'
  },
  {
    text: 'Étiquettes',
    to: '/blog/etiquettes'
  },
  {
    text: 'Archives',
    to: '/blog/archives'
  }
]
</script>
<template>
  <SubNav>
    <z-menu :links="links" />
  </SubNav>
</template>
