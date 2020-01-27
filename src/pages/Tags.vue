<template>
  <layout>
    <h1>Étiquettes</h1>
    <ul>
      <li v-for="tag in $page.tags.edges" :key="tag.node.id">
        <g-link :to="tag.node.path">{{tag.node.title }}</g-link>
      </li>
    </ul>
  </layout>
</template>

<page-query>
query {
  tags: allTag {
    edges {
      node {
        title
        id
        path
      }
    }
  }
}
</page-query>
