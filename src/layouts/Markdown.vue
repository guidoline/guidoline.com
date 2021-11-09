<script setup>
import { computed } from 'vue'
import * as layouts from '~/layouts'
import * as templates from '~/templates'
import { useRoute } from 'vue-router'
const props = defineProps({
  frontmatter: {
    type: Object,
    default: {}
  }
})

// @todo: changer le nommage pour éviter les confusions :
// layout => template
const currentLayout = computed(() => {
  const layout = props.frontmatter.layout
  // const layout = props.frontmatter.layout
  // const layout = useRoute().meta.layout
  // if (!layout) return 'null'
  // if (!layout) return false
  const layoutName = `layout-${layout}`
  return layouts.default[layoutName] || layouts.default['layout-default']
})

const template = computed(() => {
  // const template = useRoute() ? useRoute().meta.template : null
  const template = props.frontmatter.template
  return templates.default[`template-${template}`]  || templates.default['template-default']
})
</script>
<script>
export default {
  name: 'LayoutMarkdown'
}
</script>
<template>
  <component
    v-if="currentLayout"
    :is="currentLayout"
    :frontmatter="frontmatter"
  >
    <component
      v-if="template"
      :is="template"
    >
      <slot />
    </component>
    <template v-else>
      <slot />
    </template>
  </component>
  <slot v-else />
</template>
