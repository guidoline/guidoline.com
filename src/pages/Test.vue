<script setup>
import Test from '@/content/pages/test.md'
import { useRouter } from 'vue-router'
const routes = useRouter().getRoutes()//.map(r => `${r.name} => ${r.path}`)
</script>
<template>
  <LayoutDefault>
    <pre>./pages/Test.vue</pre>
    <Test/>
    <details>
      <summary>Routes</summary>
      <details
        v-for="(route, index) in routes"
        :key="index"
      >
        <summary>{{ route.name }}</summary>
        <pre>{{ route }}</pre>
      </details>
    </details>
  </LayoutDefault>
</template>
