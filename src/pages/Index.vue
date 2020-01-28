<template>
  <layout>
    <article>
      <Cover :cover="$page.welcome.hero"/>
      <h1>{{ $page.welcome.title }}</h1>
      <div v-html="$page.welcome.content"/>
    </article>
    <Section :sections="$page.welcome.sections"/>
    <h2>Agenda</h2>
    <ul class="is-quiet">
      <li v-for="event in $page.lastEvents.edges" :key="event.node.id">
        <EventAbstract :event="event.node"/>
      </li>
    </ul>
    <h2>Blog</h2>
    <ul class="is-quiet">
      <li v-for="post in $page.lastPosts.edges" :key="post.node.id">
        <PostAbstract :post="post.node"/>
      </li>
    </ul>
  </layout>
</template>


<page-query>
query {
  welcome: content(path: "/welcome/") {
    title
    excerpt
    content
    hero {
      src
      alt
      legend
      link {
        href
        text
        icon
        color
      }
    }
    sections {
      template
      title
      content
    }
  }
  lastPosts: allPost(limit: 6, sortBy: "date", order: DESC, filter: {category: {ne: "Évenements"}}) {
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
  lastEvents: allPost(limit: 3, sortBy: "date", order: DESC, filter: {category: {eq: "Évenements"}}) {
    edges {
      node {
        title
        excerpt
        path
      }
    }
  }
}
</page-query>

<script>
import Section from '@/components/Section'
import Cover from '@/components/Cover'
import PostAbstract from '@/components/Post/Abstract'
import EventAbstract from '@/components/Event/Abstract'

export default {
  components: {
    Section,
    Cover,
    PostAbstract,
    EventAbstract
  },
  metaInfo() {
    return {
      title: 'Bienvenue',
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.welcome.excerpt
        }
      ]

    }
  }
}
</script>
