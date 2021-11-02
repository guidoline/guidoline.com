<template>
  <a
    class="button"
    :class="additionnalClasses"
    :href="href"
    :title="title"
    v-if="href"
  >
    <z-icon :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
  </a>
  <router-link
    class="button"
    :class="additionnalClasses"
    :to="to"
    :title="title"
    v-else-if="to"
  >
    <z-icon :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
  </router-link>
  <button
    v-else
    class="button"
    :class="additionnalClasses.trim()"
    :title="title"
  >
    <z-icon :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
  </button>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  sr: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: null
  },
  // Extrenal
  href: {
    type: String,
    default: null
  },
  isCompact: {
    type: Boolean,
    default: false
  }
})
const additionnalClasses =
  `${props.type ? props.type : ''}` +
  `${props.isCompact ? ' is-compact' : ''}`

</script>
<style scoped>
/** @todo :
 * - variante `text` ou `hasText` (utile pour les menu verticaux) ;
 * - variante `compact` ;
 * - variante `fullwidth` ;
 * - déporter sur le screenreader sur `z-icon` ;
 * - ajouter un légère transition sur les couleurs.
 */
  .button.light,
  .button.primary {
    @apply text-gray-500 cursor-pointer py-2 px-2 font-thin uppercase text-sm subpixel-antialiased tracking-wide bg-gray-50 border-solid border-3 border-gray-300 inline-flex justify-center min-w-11 hover:(bg-gray-100 border-gray-100)
  }
  .button:not(.is-compact).text { @apply px-2; }
  .button.is-compact { @apply p-1 }
  .button.is-compact,
  .button.light {
    @apply border-gray-50 hover:(border-gray-100)
  }
  .button.primary {
    @apply text-white bg-primary-500 border-primary-600 hover:(bg-primary-700 border-primary-700);
  }
</style>
