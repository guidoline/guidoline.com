<template>
  <div class="blocks" :class="classes">
    <div class="block-left">
      <slot />
    </div>
    <div class="block-right">
      <slot name="right" />
    </div>
  </div>
</template>
<script setup>
/** Inserts, Levels, Boxes, Callouts **/
// /!\ Rester simple dans premier temps (juste dupositionnement)
//     Ajouter les posibiliés de personnalisation qu'après usage.
// @todo: tester avec divers contenu, liens, images, formulaire, etc.
  // @todo: filtrer les block `div` inutile en fonction des slots utiliser
import { computed, useAttrs } from 'vue'
const availablesStyles = ['is-center']
const attrs = useAttrs()
const classes = computed(() => {
  let result = ''
  availablesStyles.forEach(style => {
    result = Object.keys(attrs).includes(style) ?
        `${result} ${style}` :
        result
  })
  return result
})

</script>
<style scoped>
.blocks {
  /* Couleurs par défaut */
  --z-inset-color-light: rgb(228, 188, 142);
  --z-inset-color: rgb(206, 163, 113);
  --z-inset-color-dark: rgb(172, 127, 76);
  /* @note : le naommage n'est pas correct, cela devrais être un nommage par fonction :  */
  --z-inset-bg-color: var(--color-primary-light, rgb(228, 188, 142));
  --z-inset-border-color: var(--color-primary-dark, rgb(172, 127, 76));
  /**
   * Dans `windi.config.js` :
   * ~~~
   * export default {
   *  addBase: ({
   *   ':root': {
   *     '--color-primary-light': theme('colors.primary.300'),
   *     '--color-primary': theme('colors.primary.500')
   *     '--color-primary-dark': theme('colors.primary.500')
   *   }
   *  })
   * }
   * ~~~
  */
}
.blocks { @apply flex flex-wrap justify-between; }
.blocks { @apply p-inset mb-inset bg-inset-bg border-b-3 border-inset-dark; }
.blocks.is-center { @apply items-center; }
.block-right { @apply ml-auto; }
</style>
