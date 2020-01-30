<template>
  <layout>
    <h1>Newsletter</h1>
    <ul class="is-quiet" v-for="newsletter in $page.newsletters.edges" :key="newsletter.node.id">
      <li>
        <NewsletterAbstract :newsletter="newsletter.node"/>
      </li>
    </ul>
    <Pager :info="$page.newsletters.pageInfo" class="pagination" :linkclass="'pagination-link'"/>
  </layout>
</template>

<page-query>
query($page: Int) {
  newsletters: allPost(perPage: 10, page: $page, filter: {category: { eq: "Newsletter"}}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import NewsletterAbstract from '@/components/Newsletter/Abstract'
import { Pager } from 'gridsome'

export default {
  components: {
    NewsletterAbstract,
    Pager
  },
  metaInfo: {
    title: "Agenda",
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Tous les événements à venir de Guidoline sont détaillés sur notre Agenda.'
      }
    ]
  }
}
</script>
