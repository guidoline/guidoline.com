<script>
export default { name: 'App' }
</script>
<script setup>
import * as layouts from '~/layouts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// @note: layout programmatique, ne peut pas récupérer le layout depuis
// un fichier Markdown
// const currentLayout = computed(() => {
//   const layout = useRoute().meta.layout || 'default'
//   const layoutName = `layout-${layout}`
//   console.log('#LAYOUT : ', layoutName)
//   return layouts.default[layoutName]
// })
const als =  () => {
  if ('AmbientLightSensor' in window) {
    const ALS = new AmbientLightSensor()
    return ALS.illuminance
  }
}
</script>
<template>
  <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
  </router-view>
  <div class="als" v-if="asl">Illuminance: {{ als() }}</div>
</template>
<style>
/* Debug */
.gs-debug { @apply bg-violet-200 sm:bg-blue-200 md:bg-teal-200 lg:bg-lime-200 xl:bg-orange-200 2xl:bg-pink-200; }
.gs-debug > * { @apply outline-fuchsia-500 outline-dashed outline-thin; }
.als{ @apply fixed bottom-0 left-0 p-4 bg-teal-100; }
</style>
