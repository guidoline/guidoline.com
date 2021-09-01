<template>
  <article>
    <h2><g-link :to="event.path">{{ event.title }}</g-link></h2>
    <div v-markdown="event.excerpt"/>
  </article>
</template>

<script>
import Cover from '../../../src/components/Cover'
/**
 * @displayName Event/Abstract
 */
export default {
  props: {
    event: {
      type: Object,
      required: true,
    }
  },
 }
</script>
