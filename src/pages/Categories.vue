<template>
  <layout>
    <h1>Catégories</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <g-link :to="category.path">{{ category.title}}</g-link>
        ({{ category.posts.totalCount }})
      </li>
    </ul>
  </layout>
</template>

<page-query>
query {
  allCategory {
    edges {
      node {
        title
        id
        path
        posts: belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    /**
     * TODO: À rendre éditable (via un fichier de paramètre par exemple)
     */
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
  },
  computed: {
    categories() {
      return this.$page.allCategory.edges.map(edge => edge.node)
    }
  }
}
</script>
