<template>
  <Layout>
    <code>BookChapter.vue</code>
    <div v-html="chapter.content"/>
  </Layout>
</template>
<script>
export default {
  name: "Chapter",
  computed: {
    chapter() {
      return this.$page.bookChapter
    }
  }
}
</script>
<page-query>
query($path: String) {
  bookChapter(path: $path) {
    id
    path
    title
    content
  }
}
</page-query>
