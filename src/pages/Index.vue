<template>
  <layout>
    <article>
      <h1 v-html="$static.welcome.title"/>
      <div v-html="$static.welcome.content"/>
    </article>
    <ul v-for="post in $page.lastPosts.edges" :key="post.node.id">
      <li>
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </layout>
</template>


<static-query>
query {
  welcome: content(path: "/welcome") {
    title
    content
    cover {
      src
      alt
      legend
    }
  }
}
</static-query>

<page-query>
query {
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
