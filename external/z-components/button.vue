<template>
  <a
    class="button"
    :class="classes"
    :href="href"
    :title="title"
    v-if="href && !isDisabled"
  >
    <z-icon :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="btn-text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
    <z-icon :icon="iconRight" />
  </a>
  <router-link
    class="button"
    :class="classes"
    :to="to"
    :title="title"
    v-else-if="to && !isDisabled"
  >
    <z-icon :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="btn-text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
    <z-icon :icon="iconRight" />
  </router-link>
  <button
    v-else
    class="button"
    :class="classes"
    :title="title"
  >
    <z-icon :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="btn-text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
    <z-icon :icon="iconRight" />
  </button>
</template>
<script setup>
/** Bouton
 * Séléction automatique d'un lien, bouton ou lien routeur.
 */
import { computed, useAttrs } from 'vue'
const props = defineProps({
  // type: {
  //   type: String,
  //   default: null
  // },
  icon: {
    type: String,
    default: null
  },
  iconRight: {
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
  // isCompact: {
  //   type: Boolean,
  //   default: false
  // }
})
const isDisabled = computed(() => {
  return attrs['disabled'] === true
})
// const additionnalClasses =
//   `${props.type ? props.type : ''}` +
//   `${props.isCompact ? ' is-compact' : ''}`
const availablesStyles = [
  'text', 'tonal', 'filled', 'outline', 'elevated',
  'small', 'large', 'fullwidth', 'compact',
  'label', 'success', 'danger', 'light', 'dark', 'fab', 'gradient', 'shiny', 'fancy',
  'is-caps',
]
const attrs = useAttrs()
// const classes = availablesStyles
const classes = computed(() => {
  let r = ''
  // .reduce((previous, style) => {
  availablesStyles
  .forEach((style) => {
    r =  Object.keys(attrs).includes(style) ?
      `${r} ${style}` : r
      ''
  })
  return r
})
</script>
<style scoped>

/** @todo :
 * - variante `text` ou `hasText` (utile pour les menu verticaux) ;
 * - variante `compact` ;
 * - variante `fullwidth` ;
 * - déporter sur le screenreader sur `z-icon` ;
 * - ajouter un légère transition sur les couleurs.
 * - ajouter une largeur minimum
 */
 /* https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4 */
 /* https://uxdesign.cc/ui-cheat-sheets-buttons-7329ed9d6112 */


  .button {
    /*  Preflight */
    -webkit-font-smoothing: auto;
	  -moz-osx-font-smoothing: auto;
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    border-width: 0;
	  cursor: pointer;
    /* Propriétés non paramètrable */
    @apply inline-flex justify-center items-center align-middle;
  }
  /* Propriétés paramétrable */
  .button { @apply min-h-2.25rem px-4 tracking-wide text-gray-600 hover:(text-gray-900); }
  a.button { @apply text-gray-600 ; }
  .button[disabled=""] { @apply opacity-30 cursor-not-allowed; }
  .button.tonal { @apply bg-gray-100 bg-opacity-40 hover:(bg-opacity-60); }
  .button.filled { @apply bg-gray-100 hover:(bg-gray-200); }
  .button.outline { @apply ring-3 ring-gray-600 hover:(ring-gray-600 bg-gray-600); }
  .button.outline { @apply hover:text-gray-100; }
  .button.elevated { @apply shadow hover:shadow-lg; }

</style>
