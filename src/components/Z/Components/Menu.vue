<template>
  <menu
    v-if="hasLinks"
    :class="additionnalClasses"
    >
    <li
      v-for="(link, index) in links"
      :key="index"
    >
      <z-button
        :type="type"
        :to="link.to"
        :href="link.href"
        :icon="link.icon"
        :sr="link.sr"
        :title="link.title || link.name"
        :is-compact="isCompact"
        :class="linkClasses"
      >
        {{ link.name }}
      </z-button>
    </li>
  </menu>
</template>
<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  links: {
    type: Array,
    default: []
  },
  isCompact: {
    type: Boolean,
    default: false,
  },
  // Fonctionnement:
  // Vertical + btn.is-text par défaut ?
  // Si horizontal, vertical sous device md
  // Si reponsive false, ne tiens pas compte du device
  // L'aspect mobile n'as jamais la priorité au dessus de md
  // afin d'éviter d'afficher un menu mobile en cas
  // de redimenssionement de la fenêtre lors de la manipulation
  // du menu burger
  isVertical: {
    type: Boolean,
    default: false
  },
  isResponsive: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'light'
  },
  linkClasses: {
    type: String,
    default: null
  }
})
const hasLinks = computed(() => props.links.length >= 1 )
const additionnalClasses = computed(() =>
`${props.isCompact ? 'is-compact ' : '' }`+
`${props.isVertical ? 'is-vertical ' : 'is-horizontal ' }`+
`${props.isResponsive ? 'is-responsive ' : '' }`
)
</script>
<style scoped>
menu { @apply list-none px-0 m-0; }
/* menu:not(.is-vertical){ @apply flex flex-wrap justify-center items-center } */
menu:not(.is-vertical) .button { @apply w-full; }
menu { @apply flex-wrap justify-center items-center; }
menu:not(.is-responsive){ @apply flex; }
menu.is-responsive{ @apply sm:(flex ); }
menu.is-vertical{ @apply block text-left; }
menu.is-horizontal li { @apply px-4; }
menu.is-horizontal li + li { @apply pl-0; }
</style>
