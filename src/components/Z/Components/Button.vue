<template>
  <a
    class="button"
    :class="classes"
    :href="href"
    :title="title"
    v-if="isExternal && !isDisabled"
  >
    <z-icon v-if="icon" :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="btn-text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
    <z-icon v-if="iconRight" :icon="iconRight" />
  </a>
  <router-link
    class="button"
    :class="classes"
    :to="to || href"
    :title="title"
    v-else-if="(to && !isDisabled) || (href && !isExternal)"
    :download="isDownloadable"
    :target="isDownloadable ? '_blank' : null"
  >
    <z-icon v-if="icon" :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="btn-text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
    <z-icon v-if="iconRight" :icon="iconRight" />
  </router-link>
  <button
    v-else
    class="button"
    :class="classes"
    :title="title"
  >
    <z-icon v-if="icon" :icon="icon" />
    <span
      v-if="!!$slots.default"
      class="btn-text"
      :class="sr ? 'sr-only': null"
    >
      <slot/>
    </span>
    <z-icon v-if="iconRight" :icon="iconRight" />
  </button>
</template>
<script setup>
/** Bouton
 * Séléction automatique d'un lien, bouton ou lien routeur.
 *
 * @todo refactorer la bacule lien externe / lien interne pour quelques chose
 * de plus simple / lisible.
 */
import { computed, useAttrs } from 'vue'
const props = defineProps({
  // type: {
  //   type: String,
  //   default: null
  // },
  icon: {
    type: [String, Object],
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
    default: ''
  },
  // Extrenal
  href: {
    type: String,
    default: ''
  },
})

const isDisabled = computed(() => {
  return attrs['disabled'] === true
})

const isExternal = computed(() => (props.href.startsWith('http')) || props.to.startsWith('http') ||  !(props.href.startsWith('/') || props.to.startsWith('/')))

// Attributs personnalisés
const availablesStyles = [
  'text', 'tonal', 'filled', 'outline', 'elevated',
  'small', 'large', 'fullwidth', 'compact',
  'label', 'success', 'danger', 'light', 'dark', 'fab', 'gradient', 'shiny', 'fancy', 'primary', 'secondary',
  'is-caps',
]
const attrs = useAttrs()
// Compilation des attributs en classe
const classes = computed(() => {
  let r = ''
  availablesStyles
  .forEach((style) => {
    r =  Object.keys(attrs).includes(style) ?
      `${r} ${style}` : r
      ''
  })

  // SR impose une version compacte
  if (props.sr) r = `${r} compact`

  return r
})

const isDownloadable = computed(() => {
  if (!props.to) return
  return props.icon === 'download' ? props.to.split('/').pop() : null
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
    text-decoration: none;
    /* Propriétés non paramètrable */
    @apply inline-flex justify-center items-center align-middle;
  }
  /* Propriétés paramétrable */
  .button { @apply min-h-2.25rem px-3 py-2 tracking-wide text-main-dark hover:(text-main-dark-dark); }
  .button.compact { @apply px-2 py-1;}
  .button
  a.button { @apply text-gray-600 ; }
  .button.is-active { text-decoration: underline; }
  .button[disabled=""] { @apply opacity-30 cursor-not-allowed; }
  .button.text { @apply px-0 hover:(underline); }
  .button.tonal { @apply bg-main-light-dark bg-opacity-40 hover:(bg-opacity-60); }
  .button.filled { @apply bg-main-light-dark hover:(bg-main-dark-light text-main-light); }
  .button.outline { @apply ring-3 ring-day-border hover:(ring-day-border bg-day-border); }
  .button.outline { @apply hover:text-day-text; }
  .button.elevated { @apply shadow hover:shadow-lg; }
  /* couleurs */
  .button.primary { @apply bg-main-primary text-main-light hover:(bg-main-primary-dark text-main-light-light); }
  .button.secondary { @apply bg-main-secondary text-main-dark hover:(bg-main-secondary-dark text-main-dark-dark); }
  .button.accent { @apply bg-main-accent text-main-light hover:(bg-main-accent-dark text-main-light-light); }
  .button.light:not(.text) { @apply bg-main-primary text-main-light; }
  .button.light.text { @apply font-light text-main-light hover:text-main-light-light; }
  /* Gestion des espaces blanc */
  .button + .button { @apply ml-1; }
  .button .icon { @apply mt-[2px]; }
  .button .icon + span,
  .button span + .icon { @apply ml-[4px]; }
</style>
