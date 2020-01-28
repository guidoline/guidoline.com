<template>
  <layout>
    <ul class="is-quiet" v-for="event in $page.events.edges" :key="event.node.id">
      <li>
        <EventAbstract :event="event.node"/>
      </li>
    </ul>
  </layout>
</template>

<page-query>
query {
  events: allPost(limit: 6, filter: {category: { eq: "Évenements"}}) {
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

export default {
  metaInfo: {
    title: "Agenda"
  },
  components: {
    EventAbstract
  }
}
</script>
