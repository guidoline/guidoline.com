<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePagesStore } from '~/store/modules/pages.js'

const welcome = computed(() => usePagesStore().page('/index'))

</script>
<template>
  <LayoutHome>
    <pre>#{{ welcome }}</pre>
  </LayoutHome>
</template>
