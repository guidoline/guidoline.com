<template>
  <h1><slot>Default title</slot></h1>
  <h2 v-if="subtitle">{{ subtitle }}</h2>
</template>
<script setup>
const props = defineProps({
  subtitle: {
    type: String,
    default: null
  }
})
</script>
<style scoped>
h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
}
h2 {
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  margin-top: -1.5rem;
}
</style>