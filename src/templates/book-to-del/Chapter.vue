<template>
  <Layout>
    <h1>{{ chapter.title }}</h1>
    {{ chapter.content }}
  </Layout>
</template>
<script>
export default {
  name: "Chapter",
  computed: {
    chapter() {
      return this.$page.chapter
    }
  }
}
</script>
<page-query>
query($path: String) {
  chapter(path: $path) {
    id
    path
    title

  }
}
</page-query>
