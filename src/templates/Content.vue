<template>
  <layout>
    <article>
      <h1 v-html="$page.content.title"/>
      <div v-html="$page.content.content"/>
    </article>
  </layout>
</template>

<page-query>
query content($path: String) {
  content: content(path: $path) {
    id
    title
    excerpt
    content
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.content.title,
      meta: [
        {
          name: 'description',
          content: this.$page.content.excerpt
        }
      ]
    }
  },
}
</script>
