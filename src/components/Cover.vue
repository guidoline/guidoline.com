<template>
  <figure v-if="cover.src">
    <g-image :src="cover.src" :alt="cover.alt" />
    <figcaption v-if="cover.legend">
      <div v-markdown="cover.legend" />
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    cover: {
      type: Object,
    }
  }
}
</script>
