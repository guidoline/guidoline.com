<template>
  <div
    :class="`styleguide-swatch ${ colorName }`"
    :style="`background-color: var(--${colorName})`"
  >
    {{ colorName }}
  </div>
</template>

<script>
export default {
  props: {
    colorName: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

.styleguide-swatch {
  width: 3em;
  height: 3em;
  border: 1px solid gray;
}
</style>
