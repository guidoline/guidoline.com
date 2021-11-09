<template>
  <div class="inset z-inset" data-z :class="classes">
    <div class="inset-left">
      <slot />
    </div>
    <div class="inset-right">
      <slot name="right" />
    </div>
  </div>
</template>
<script setup>
/**
 * Inset
 *
 * Test de composant sans dépendance CSS
 */
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
.inset {
  /**
   * Surclasser les variables du composant :
   *
   * ~~~
   * .z-inset.my-custom-inset[data-z],
   * div.z-inset[data-z] {
   *  --z-inset-background: red;
   * }
   * ~~~
   *
   * @uses:
   * - --margin
   * - --padding
   * - --color-primary-dark
   * - --color-primary
   * - --color-primary-invert
   * - --border-width
   * - --border-style
   * - --border-radius
   */
  --z-inset-margin: var(--margin, 0 0 1.5rem 0);
  --z-inset-padding: var(--padding, 1rem);
  --z-inset-background: var(--color-primary, rgb(206, 163, 113));
  --z-inset-color: var(--color-primary-invert, rgb(17, 6, 39));
  --z-inset-border-width: var(--border-width, 0 0 0 0);
  --z-inset-border-style: var(--border-style, solid);
  --z-inset-border-color: var(--color-primary-dark, rgb(172, 127, 76));
  --z-inset-border-radius: var(--border-radius, 0);
}
.inset {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: var(--z-inset-margin);
  padding: var(--z-inset-padding);
  border-width: var(--z-inset-border-width);
  border-style: var(--z-inset-border-style);
  border-color: var(--z-inset-border-color);
  border-radius: var(--z-inset-border-radius);
  background: var(--z-inset-background);
  color: var(--z-inset-color);
}
.inset:not(.is-center) .inset-left :first-of-type,
.inset:not(.is-center) .inset-right :first-of-type { margin-top: 0; }
.inset.is-center { align-items: center; }
.inset-right { margin-left: auto; }
</style>
