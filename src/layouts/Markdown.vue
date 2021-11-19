<script setup>
import { computed } from 'vue'
import * as layouts from '~/layouts'
import * as templates from '~/templates'
import { useRoute } from 'vue-router'
const props = defineProps({
  content: {
    type: Object,
    default: {}
  }
})

// @todo: changer le nommage pour éviter les confusions :
// layout => template
const currentLayout = computed(() => {
  const layout = props.content.layout
  // const layout = props.content.layout
  // const layout = useRoute().meta.layout
  // if (!layout) return 'null'
  // if (!layout) return false
  const layoutName = `layout-${layout}`
  return layouts.default[layoutName] || layouts.default['layout-default']
})

const template = computed(() => {
  // const template = useRoute() ? useRoute().meta.template : null
  const template = props.content.template
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
    :content="content"
  >
    <component
      v-if="template"
      :is="template"
      :content="content"
    >
      <slot />
    </component>
    <template v-else>
      <slot />
    </template>
  </component>
  <slot v-else />
</template>
