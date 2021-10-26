<template>
  <!-- Lien relatif -->
  <g-link
    v-if="href && !isExternal"
    class="button"
    :to="href"
  >
    <slot>
      Default name
    </slot>
  </g-link>
  <!-- Lien absolue -->
  <a
    v-else-if="href"
    class="button"
    :href="href"
  >
    <slot>
      Default name
    </slot>
  </a>
  <!-- Bouton -->
  <button
    v-else
    class="button"
  >
    <slot>
      Default name
    </slot>
  </button>
</template>

<script>
/**
 * Utilitaire pour afficher un bouton.
 */
export default {
  name: 'Button',
  props: {
    /**
     * Si aucun lien n'est spécifié, un bouton `<button>`sera généré.
     */
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    isExternal () {
      const regExp = new RegExp('^https://|http://', 'g')
      return regExp.test(this.href)
    }
  }
}
</script>

<style>
/**
 * Multi purpose Button
 *
 * Example :
 *
 * ~~~
 * <Button href="http://example.com" class="is-dark" />
 * ~~~
 *
 * @todo: Ajouter des valeurs fallback (ex. `var(--paddings, 1rem)`)
 *
 * @uses
 * - --color-white
 * - --color-white-contrast
 * - --color-grey-lighter
 * - --color-grey-lighter-contrast
 * - --paddings
 * - --font-family-ui
 * - --font-size-small
 */
.button {
  --button-background-color: var(--color-white);
  --button-text-color: var(--color-white-invert);
  --button-background-color-hover: var(--color-grey-lighter);
  --button-text-color-hover: var(--color-grey-lighter-invert);

  display: inline-block;
  padding: var(--paddings);
  color: var(--button-text-color);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-normal);
  font-family: var(--font-family-ui);
  line-height: var(--line-height);
  text-transform: uppercase;
  text-decoration: none;
  background-color: var(--button-background-color);
  border: calc(var(--pixrem) * 3) solid transparent;
  cursor: pointer;

  &.is-compact {
    --paddings: 0 var(--gap-quarter);
  }

  &.is-primary {
    --button-background-color: var(--color-primary);
    --button-text-color: var(--color-primary-invert);
    --button-background-color-hover: var(--color-primary-dark);
    --button-text-color-hover: var(--color-primary-dark-invert);
  }

  &.is-secondary {
    --button-background-color: var(--color-secondary);
    --button-text-color: var(--color-secondary-invert);
    --button-background-color-hover: var(--color-secondary-dark);
    --button-text-color-hover: var(--color-secondary-dark-invert);
  }

  &.is-dark {
    --button-background-color: var(--color-grey-dark);
    --button-text-color: var(--color-grey-dark-invert);
    --button-background-color-hover: var(--color-grey-darker);
    --button-text-color-hover: var(--color-grey-darker-invert);
  }

  &.is-text {
    text-transform: none;
    text-decoration: underline;

    --button-background-color: transparent;
    --button-text-color: var(--color-text);
    --button-background-color-hover: var(--color-grey-lighter);
    --button-text-color-hover: var(--color-white-invert);
  }

  &.is-outlined:not(.is-text) {
    color: var(--button-background-color);
    background-color: transparent;
    border-color: var(--button-background-color);

    &:hover {
      color: var(--button-text-color);
      background-color: var(--button-background-color);
    }
  }
}

.button:hover {
  --button-background-color: var(--button-background-color-hover);
  --button-text-color: var(--button-text-color-hover);

  text-decoration: none;
}

.button.is-fullwidth {
  display: block;
  text-align: center;
}

.button.is-disabled,
.button.is-disabled:hover {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
