<script setup>
import { computed } from 'vue'
import * as templates from '~/templates'
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

// Le Layout est instancié par le template
const template = computed(() => {
  const template = props.content.template
  return templates.default[`template-${template}`]  || templates.default['template-default']
})
</script>
<script>
export default {
  name: 'LayoutMarkdown'
}
</script>
<template>
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
</template>
