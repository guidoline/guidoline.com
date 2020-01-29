<template>
  <layout>
    <h1><small>Articles de la categorie</small> {{ $page.category.title }}</h1>
    <ul>
      <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </layout>
</template>

<page-query>
query ($path: String) {
  category(path: $path) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>
