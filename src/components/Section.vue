<template>
  <section :class="section.template">
      <h1 v-html="section.title" />
      <div v-markdown="section.content" />
  </section>
</template>


<script>
export default {
  props: {
    section: {
      type: Object,
    }
  }
}
</script>
