<script setup>
import SubNav from '~/components/Layout/Navigation/SubNav.vue'
const links = [
  {
    name: 'Articles',
    to: '/journal/'
  },
  {
    name: 'Catégories',
    to: '/journal/categories'
  },
  {
    name: 'Étiquettes',
    to: '/journal/etiquettes'
  },
  {
    name: 'Archives',
    to: '/journal/archives'
  }
]
</script>
<template>
  <SubNav>
    <z-menu :links="links" />
  </SubNav>
</template>
