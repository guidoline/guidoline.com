<template>
  <no-ssr>
    <div>
      <!-- Todo: Créer un composant pour le champ de recherche -->
      <input
        v-model="searchTerms"
        type="search"
      >
      <ul>
        <li v-if="noSearchResult">
          Aucun résultat pour le terme « {{ searchTerms }} ».
        </li>
        <li v-if="searchResults.posts.length">
          <h3>Posts ({{ searchResults.posts.length }})</h3>
          <ul>
            <li
              v-for="(post, index) in searchResults.posts"
              :key="index"
            >
              <g-link :to="post.node.path">
                {{ post.node.title }}
              </g-link>
            </li>
          </ul>
        </li>
        <li v-if="searchResults.tags.length">
          <h3>Tags ({{ searchResults.tags.length }})</h3>
          <ul>
            <li
              v-for="(tag, index) in searchResults.tags"
              :key="index"
            >
              <g-link :to="tag.node.path">
                {{ tag.node.title }}
              </g-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </no-ssr>
</template>
<script>
import NoSSR from 'vue-no-ssr'
export default {
  name: 'Searchbox',
  components: {
    'no-ssr': NoSSR
  },
  props: {
    terms: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchTerms: this.terms
    }
  },
  computed: {
    searchResults () {
      const results = {
        posts: [],
        tags: []
      }
      // Souscis avec le rendu SSR
      // Patch
      if (!this.$search) return results
      // END Patch
      if (this.searchTerms.length < 3) return results
      this.$search.search({
        query: this.searchTerms,
        limit: 99
      }).forEach(result => {
        results[result.index].push(result)
      })
      return results
    },
    noSearchResult () {
      return (
        this.searchTerms.length >= 3 &&
        this.searchTerms !== '' &&
        this.searchResults.posts.length === 0 &&
        this.searchResults.tags.length === 0
      )
    }
  }
}
</script>
