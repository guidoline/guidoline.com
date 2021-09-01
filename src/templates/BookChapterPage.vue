<template>
  <Layout>
    <code>BookChapterPage.vue</code>
    <div v-html="chapterPage.content"/>
  </Layout>
</template>
<script>
export default {
  name: "ChapterPage",
  computed: {
    chapterPage() {
      return this.$page.bookChapterPage
    }
  }
}
</script>
<page-query>
query($path: String) {
  bookChapterPage(path: $path) {
    id
    path
    title
    content
  }
}
</page-query>
