<script setup>
/**
 * Liste de liens avec des icônes personnaliséé
 */
import { computed } from 'vue'
import IconFacebook from '~/assets/icons/facebook.svg?inline'
import IconTwitter from '~/assets/icons/twitter.svg?inline'
import IconInstagram from '~/assets/icons/instagram.svg?inline'
const customIcons = {
  'facebook': IconFacebook,
  'twitter': IconTwitter,
  'instagram': IconInstagram
}
const props = defineProps({
  links: {
    type: Array,
    require: true
  }
})

const socialLinks = computed(() => {
  const iconsList = Object.keys(customIcons)
  return props.links.map(l => {
    if (typeof l.icon !== 'string') return l
    if (iconsList.includes(l.icon.toLowerCase())) {
      l.icon = customIcons[l.icon.toLowerCase()]
    }
    return l
  })
})

</script>
<template>
  <z-menu :links="socialLinks" />
</template>
