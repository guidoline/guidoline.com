<template>
  <Layout>
    <code>BookPage.vue</code>
    <div v-html="page.content"/>
  </Layout>
</template>
<script>
export default {
  name: "BookPage",
  computed: {
    page () {
      return this.$page.bookPage
    }
  }
}
</script>
<page-query>
query ($path: String) {
  bookPage(path: $path) {
    id
    path
    title
    excerpt
    content
  }
}
</page-query>
