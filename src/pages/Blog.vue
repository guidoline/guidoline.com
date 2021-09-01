<template>
  <layout>
    <h1>Blog</h1>
    <article v-for="post in $page.posts.edges" :key="post.node.id">
      <h1>{{ post.title }}</h1>
      <PostAbstract :post="post.node"/>
    </article>
    <Pager :info="$page.posts.pageInfo" class="pagination" :linkClass="'pagination-link'"/>
  </layout>
</template>
<page-query>
query($page: Int) {
  posts: allPost(perPage: 10, page: $page, filter: {category : { ne: "Évenements"}}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        excerpt
        path
        category {
          title
          path
        }
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
import { Pager } from 'gridsome'

export default {
  components: {
    PostAbstract,
    Pager
  },
  metaInfo() {
    return {
      title: 'Blog',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Retrouvez le détail et le retour sur toutes les activités de Guidoline sur notre Blog.'
        }
      ]
    }
  }
}
</script>
