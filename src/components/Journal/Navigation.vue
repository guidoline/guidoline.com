<script setup>
import SubNav from '~/components/Layout/Navigation/SubNav.vue'
const links = [
  {
    text: 'Articles',
    to: '/journal/'
  },
  {
    text: 'Catégories',
    to: '/journal/categories'
  },
  {
    text: 'Étiquettes',
    to: '/journal/etiquettes'
  },
  {
    text: 'Archives',
    to: '/journal/archives'
  }
]
</script>
<template>
  <SubNav>
    <z-menu :links="links" />
  </SubNav>
</template>
