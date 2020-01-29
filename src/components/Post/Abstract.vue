<template>
  <article>
    <h2><g-link :to="post.path">{{ post.title }}</g-link></h2>
    <Cover v-if="post.cover" :cover="post.cover"/>
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
