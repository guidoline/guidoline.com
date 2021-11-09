<template>
  <a
    class="button"
    :class="classes"
    :href="href"
    :title="title"
    v-if="href"
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
    v-else-if="to"
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

/*
todo: commencer par une full dépendance WindiCSS avec quelques variantes basiques. Voir plus tard, en fondtion du besoin, la personnalisation des variables et/ou à la suppression de dépendances WWindiCSS.
*/

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
 /**
  * @todo: Supprimer les dernière depndance à WindiCSS
  * Le composant reste non styllisé.
  * Il est possible d'utiliser le plusing WindiCSS associé :
  * ~~~
  * // windiconfig.js
  * import colors from 'windicss/colors
  * import { ZButton } from 'z-component'
  * export default {
  *  plugins: [
  *   plugin({ addComponents, theme }) {
  *    addComponent(ZButton(theme))
  *   }
  *  ]
  *  // Personnalisé le composannt
  *  theme: {
  *   ZButton: {
  *    color: colors.amber[50],
  *    background: coloes.indigo[500]
  *   }
  *  }
  * }
  * ~~~
  */

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
    /* Propriétés paramétrable */
    @apply z-button;
  }
  /* .button.primary {
    background: theme('button.primary.background.500');
    color: theme('button.primary.color.500');

  } */
  /* .button:hover {
  } */
  /* .button { @apply  bg-gray-50 border-solid border-b-3 border-t-3 border-gray-300 } */
  /* .button { @apply shadow-sm hover:shadow-md } */
  /* .button { @apply rounded-full } */
  /* .button { @apply !bg-tansparent !bg-opacity-0 border-3 font-medium } */
  /* .button { border-color: currentColor !important; } */

  /* .button { @apply hover:(text-gray-900 bg-gray-100 border-gray-200) } */
  /* button.button {
    --tw-to-opacity: 0.8;
    --tw-from-opacity: 0.8;
    @apply bg-opacity-80 border-opacity-80 hover:(bg-opacity-100 border-opacity-100 )
  } */
  /* button.button:hover {
    --tw-to-opacity: 1;
    --tw-from-opacity: 1;
  } */
  /* .btn-text {@apply align-middle px-2 } */
  /* .button.has-icon { @apply px-2 } */
  .is-fullwidth { @apply w-full }
  .is-caps { @apply uppercase tracking-wider px-5 py-4 }
  .is-link {
    border-color: transparent;
    background: transparent;
    /* Note: soucis avec la transparence */
    /* @todo: mieux exploiter les exclutions :not */
    @apply border-transparent bg-transparent text-blue-500 underline
  }
  /** Note: Ne pas s'acharner sur .is-compact, les varaintres (is-text)
   *  devrais être suffisantes pour couvrir les besoins.
   */
  .is-small { @apply text-xs px-2 py-3 }
  .is-small svg { @apply w-4 h-4 }
  .is-large { @apply text-lg px-4 py-4 }
  .is-large svg { @apply w-8 h-8 }
  .is-light { @apply text-black bg-white border-gray-50 hover:(border-gray-100) }
  .is-dark { @apply bg-gray-900 border-gray-900 hover:(border-gray-900) }
  /* not shadow */
  /* .is-dark { @apply txt-white } */
  .is-primary {
    @apply bg-primary-500 text-primary-600
  }
  /* Utilities */
  /* @kiss: Ne conserver que les variantes success & danger et quelques
   * variantes pour les usaes courant :
   * - UI : navigation, pagination, recherche, etc
   * - promotion, CTA, etc.
   */
  /* @todo: suprimer l'opacité sur l'effet de survol; préferer des variantes de couleur */
  /* .is-primary,
  .is-dark,
  .is-gradient,
  .is-shiny,
  .is-fancy,
  .is-success,
  .is-danger,
  .is-info { @apply text-white text-shadow-sm }
   */
  /* .is-success { @apply text-blue-gray-900 bg-green-500 border-green-600 }
  .is-danger { @apply text-blue-gray-900 bg-red-500 border-red-600 }
  .is-info { @apply text-blue-gray-900 bg-blue-500 border-blue-600 }
  .is-warning { @apply text-blue-gray-900 bg-yellow-400 border-amber-500 } */
  .is-success { @apply text-green-500 bg-green-500 border-green-600 }
  .is-danger { @apply text-red-500 bg-red-500 border-red-600 }
  .is-info { @apply text-blue-500 bg-blue-500 border-blue-600 }
  .is-warning { @apply text-yellow-500 bg-yellow-400 border-amber-500 }
  .is-shiny { @apply border-primary-700 bg-gradient-to-tr from-primary-700 to-primary-400 }
  .is-gradient { @apply border-primary-600 bg-gradient-to-tr from-primary-600 to-emerald-400 }
  .is-fancy { @apply border-indigo-600 bg-gradient-to-tr from-indigo-600 to-fuchsia-600 }
</style>
