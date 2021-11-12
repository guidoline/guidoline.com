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
  --z-inset-background: var(--color-primary, #f4f4f5);
  --z-inset-color: var(--color-primary-invert, #27272a);
  --z-inset-font-size: var(--font-size, 1rem);
  --z-inset-border-width: var(--border-width, 0 0 0 0);
  --z-inset-border-style: var(--border-style, solid);
  --z-inset-border-color: var(--color-primary-dark, #d4d4d8);
  --z-inset-border-radius: var(--border-radius, none);
  --z-inset-box-shadow: var(--box-shadow, none);
}
.inset {
  display: flex;
  align-items: center;
  margin: var(--z-inset-margin);
  padding: var(--z-inset-padding);
  border-width: var(--z-inset-border-width);
  border-style: var(--z-inset-border-style);
  border-color: var(--z-inset-border-color);
  border-radius: var(--z-inset-border-radius);
  font-size: var(--z-inset-font-size);
  /* border: var(--z-inset-border); */
  background: var(--z-inset-background);
  color: var(--z-inset-color);
  box-shadow: var(--z-inset-box-shadow);
}
/* .inset :deep(*) { color: var(--z-inset-color); } */
.inset-left :last-child,
.inset-right :last-child { margin-bottom: 0; }
.inset-left :deep(img),
.inset-right :deep(img) { min-width: unset; }
.inset-left + .inset-right { padding-left: var(--gap, 1rem); }

/* Align left */
.inset-right { flex-grow: 1; }
/* Align right */
.inset.is-align-right :deep(.inset-left) { flex-grow: 1; }
.inset.is-align-right :deep(.inset-right) { flex-grow: 0; }
/* Center */
.inset .inset-left :first-of-type,
.inset .inset-right :first-of-type { margin-top: 0; }
.inset.is-center { align-items: center; }
/* Couleurs */
.inset.is-light {
  --z-inset-background: var(--color-gray-lighter, #fafafa);
  --z-inset-color: var(--color-gray-lighter-invert, #3f3f46);
  --z-inset-border-color: var(--color-gray-light, #e4e4e7);
}
.inset.is-dark {
  --z-inset-background: var(--color-gray-dark, #3f3f46);
  --z-inset-color: var(--color-gray-dark-invert, #fafafa);
  --z-inset-border-color: var(--color-gray-darker, #18181b);
}
.inset.is-success {
  --z-inset-background: var(--color-success, #86efac);
  --z-inset-color: var(--color-success-invert, #3f3f46);
  --z-inset-border-color: var(--color-success-dark, #4ade80);
}
.inset.is-danger {
  --z-inset-background: var(--color-danger, #fca5a5);
  --z-inset-color: var(--color-danger-invert, #3f3f46);
  --z-inset-border-color: var(--color-danger-dark, #f87171);
}
.inset.is-info {
  --z-inset-background: var(--color-info, #67e8f9);
  --z-inset-color: var(--color-info-invert, #3f3f46);
  --z-inset-border-color: var(--color-success-dark, #22d3ee);
}
.inset.is-warning {
  --z-inset-background: var(--color-warning, #fde047);
  --z-inset-color: var(--color-warning-invert, #3f3f46);
  --z-inset-border-color: var(--color-warning-dark, #facc15);
}
.primary {}
.gradient {}
.shiny {}
.fancy {}
/* Bordures */
.inset.is-rounded {
  --z-inset-border-radius: 3rem;
}
.inset.is-bordered {
  --z-inset-border-style: var(--border-style, solid);
  --z-inset-border-width: 0 0 0 var(--border-width, .2rem);
}

/* Réservé à l'interactivité */
/* Attention à la confusion avec les actions */
.inset.is-text {}
.inset.is-tonal {}
.inset.is-filled {}
.inset.is-outlined {
  --z-inset-border-width: var(--border-width, .2rem);
  --z-inset-color: var(--inet-border-color);
  --z-inset-background: transparent;
}
.inset.is-elevated {}

.inset.tonal { @apply bg-gray-100 bg-opacity-40 hover:(bg-opacity-60); }
.inset.filled { @apply bg-gray-100 hover:(bg-gray-200); }
.inset.outlined { @apply ring-3 ring-gray-600 hover:(ring-gray-600 bg-gray-600); }
.inset.outlined { @apply hover:text-gray-100; }
.inset.elevated { @apply shadow hover:shadow-lg; }

</style>
