<template>
  <layout>
    <h1>Blog</h1>
    <article v-for="post in $page.posts.edges" :key="post.node.id">
      <h1>{{ post.title }}</h1>
      <PostAbstract :post="post.node"/>
    </article>
  </layout>
</template>
<page-query>
query {
  posts: allPost(limit: 10, filter: {category : { ne: "Évenements"}}) {
    edges {
      node {
        title
        excerpt
        path
        cover {
          src
          alt
          legend
        }
      }
    }
  }
}
</page-query>
<script>
import PostAbstract from '@/components/Post/Abstract'

export default {
  components: {
    PostAbstract
  },
  metaInfo() {
    return {
      title: 'Blog',
      meta: [
        {
          name: 'description',
          content: 'Retrouvez le détail et le retour sur toutes les activités de Guidoline sur notre Blog.'
        }
      ]
    }
  }
}
</script>
