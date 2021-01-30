<template>
  <layout>
    <h1>Étiquettes</h1>
    <ul>
      <li v-for="tag in tags" :key="tag.id">
        <g-link :to="tag.path">{{ tag.title }}</g-link>
        ({{ tag.posts.totalCount }})
      </li>
    </ul>
  </layout>
</template>

<page-query>
query {
  allTag {
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
  /**
   * TODO : Rendre les métas éditables (cf. `pages/Category.vue`)
   */
  metaInfo() {
    return {
      title: 'Étiquettes',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Accédez au contenu du site via les étiquettes.'
        }
      ]
    }
  },
  computed: {
    tags() {
      return this.$page.allTag.edges.map( edge => edge.node )
    }
  }
}
</script>
