<template>
  <figure>
    <img :src="cover.src" :alt="cover.alt"/>
    <figcaption
      v-if="cover.legend"
    >
      <div v-html="cover.legend" />
      <z-button
        v-if="cover.link.href"
        :to="cover.link.href"
        :icon="cover.link.icon"
        :type="cover.link.color"
      >
        {{ cover.link.text }}
      </z-button>
    </figcaption>
  </figure>
</template>
<script>
export default { name: 'Cover' }
</script>
<script setup>
defineProps({
  cover: {
    type: Object,
    required: true
  }
})
</script>
