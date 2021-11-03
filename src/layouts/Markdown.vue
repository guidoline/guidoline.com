<script setup>
import { computed } from 'vue'
import * as layouts from '~/layouts'
const props = defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})

// @todo: changer le nommage pour éviter les confusions :
// layout => template
const currentLayout = computed(() => {
  const layout = props.frontmatter.layout || 'empty'
  const layoutName = `layout-${layout}`
  return layouts.default[layoutName]
})
</script>
<script>
export default {
  name: 'LayoutMarkdown'
}
</script>
<template>
  <pre>layouts/Markdown.vue</pre>
  <component :is="currentLayout" :frontmatter="frontmatter">
    <slot />
  </component>
</template>
