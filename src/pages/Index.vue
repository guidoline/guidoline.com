<template>
  <layout>
    <article>
      <Cover v-if="page.hero" :cover="page.hero"/>
      <h1>{{ page.title }}</h1>
      <div v-html="page.content"/>
    </article>
    <div class="columns">
      <Section
        v-for="section in page.sections"
        :key="section.id"
        :section="section"
        class="column"
      />
    </div>
    <template v-if="lastEvents.length">
      <h2>Agenda</h2>
      <ul class="is-quiet">
        <li v-for="event in lastEvents" :key="event.id">
          <EventAbstract :event="event"/>
        </li>
      </ul>
    </template>
    <template v-if="lastPosts.length">
      <h2>Blog</h2>
      <ul class="is-quiet">
        <li v-for="post in lastPosts" :key="post.id">
          <PostAbstract :post="post"/>
        </li>
      </ul>
    </template>
  </layout>
</template>


<page-query>
query {
  page: pageEntry(path: "/") {
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
          content: this.$page.page.excerpt
        }
      ]

    }
  },
  computed: {
    page () {
      return this.$page.page
    },
    lastPosts() {
      return this.$page.lastPosts.edges.map(edge => edge.node)
    },
    lastEvents() {
      return this.$page.lastEvents.edges.map(edge => edge.node )
    }
  }
}
</script>
