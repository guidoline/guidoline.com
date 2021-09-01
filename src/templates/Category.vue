<template>
  <layout>
    <h1><small>Articles de la categorie</small> {{ $page.category.title }}</h1>
    <ul class="is-quiet">
      <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <h2>{{ edge.node.title }}</h2>
          <p>{{ edge.node.excerpt }}</p>
        </g-link>
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
            excerpt
            path
          }
        }
      }
    }
  }
}
</page-query>
