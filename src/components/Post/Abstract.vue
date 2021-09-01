<template>
  <article>
    <h2><g-link :to="post.path">{{ post.title }}</g-link></h2>
    <Cover v-if="post.cover" :cover="post.cover"/>
    <div v-markdown="post.excerpt"/>
    <g-link v-if="post.category" :to="post.category.path">{{ post.category.title }}</g-link>
  </article>
</template>

<script>
import Cover from '../../components/Cover'

/**
 * @displayName Post/Absract
 */
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  components: {
    Cover
  }
}
</script>
