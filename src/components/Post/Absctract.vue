<template>
  <article>
    <h2 v-html="post.title"/>
    <Cover :cover="post.cover"/>
    <div v-markdown="post.excerpt"/>
  </article>
</template>

<script>
import Cover from '@/components/Cover'

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
