<template>
  <layout>
    <article>
      <Cover :cover="$page.welcome.cover"/>
      <h1 v-html="$page.welcome.title"/>
      <div v-html="$page.welcome.content"/>
    </article>
    <Section :sections="$page.welcome.sections"/>
    <ul v-for="post in $page.lastPosts.edges" :key="post.node.id">
      <li>
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </layout>
</template>


<page-query>
query {
  welcome: content(path: "/welcome") {
    title
    content
    cover {
      src
      alt
      legend
      link {
        target
        text
      }
    }
    sections {
      template
      title
      content
    }
  }
  lastPosts: allPost(limit: 6, sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
import Layout from '@/layouts/Default'
import Section from '@/components/Section'
import Cover from '@/components/Cover'

export default {
  components: {
    Layout,
    Section,
    Cover
  }
}
</script>
