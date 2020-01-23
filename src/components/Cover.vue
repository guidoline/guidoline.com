<template>
  <figure v-if="cover">
    <g-image :src="cover.src" :alt="cover.alt" />
    <figcaption v-if="cover.legend">
      <div v-markdown="cover.legend" />
      <g-link v-if="cover.link" href="cover.link.target">{{ cover.link.text }}</g-link>
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
