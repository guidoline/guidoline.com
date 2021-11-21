<script>
export default { name: 'App' }
</script>
<script setup>
import * as layouts from '~/layouts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

</script>
<template>
  <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
  </router-view>
</template>
<style>
/* Debug */
.gs-debug { @apply bg-violet-200 sm:bg-blue-200 md:bg-teal-200 lg:bg-lime-200 xl:bg-orange-200 2xl:bg-pink-200; }
.gs-debug > * { @apply outline-fuchsia-500 outline-dashed outline-thin; }
.als{ @apply fixed bottom-0 left-0 p-4 bg-teal-100; }
</style>
