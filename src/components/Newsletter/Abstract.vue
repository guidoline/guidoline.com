<template>
  <article>
    <h2><g-link :to="newsletter.path">{{ newsletter.title }}</g-link></h2>
    <div v-markdown="newsletter.excerpt"/>
  </article>
</template>

<script>
import Cover from '../../components/Cover'
/**
 * @displayName Newsletter/Abstract
 */
export default {
  props: {
    newsletter: {
      type: Object,
      required: true,
    }
  },
 }
</script>
