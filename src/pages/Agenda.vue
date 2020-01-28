<template>
  <layout>
    <h1>Agenda</h1>
    <ul class="is-quiet" v-for="event in $page.events.edges" :key="event.node.id">
      <li>
        <EventAbstract :event="event.node"/>
      </li>
    </ul>
    <Pager :info="$page.events.pageInfo" class="pagination" :linkclass="'pagination-link'"/>
  </layout>
</template>

<page-query>
query($page: Int) {
  events: allPost(perPage: 10, page: $page, filter: {category: { eq: "Évenements"}}) @paginate {
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
import EventAbstract from '@/components/Event/Abstract'
import { Pager } from 'gridsome'

export default {
  components: {
    EventAbstract,
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
