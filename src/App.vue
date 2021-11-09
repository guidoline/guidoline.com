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

</script>
<template>
  <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
  </router-view>
</template>
