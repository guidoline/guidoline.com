<template>
  <layout>
    <h1>Catégories</h1>
    <ul>
      <li v-for="category in $page.categories.edges" :key="category.node.id">
        <g-link :to="category.node.path">{{category.node.title }}</g-link>
      </li>
    </ul>
  </layout>
</template>

<page-query>
query {
  categories: allCategory {
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

<script>
export default {
  metaInfo() {
    return {
      title: 'Catégories',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Diverses rubriques du site.'
        }
      ]
    }
  }
}
</script>
