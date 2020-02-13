<template>
  <form>
    <input
      id="search"
      v-model="searchTerm"
      type="search"
    >
    <ul class="is-quiet">
      <li v-if="searchResults.Post">
        <h2>Posts</h2>
        <ul class="is-quiet">
          <li
            v-for="result in searchResults.Post"
            :key="result.id"
          >
            <g-link :to="result.path">
              <h3>{{ result.title }}</h3>
            </g-link>
          </li>
        </ul>
      </li>
      <li v-if="searchResults.Tag">
        <h2>Tags</h2>
        <ul class="is-quiet">
          <li
            v-for="result in searchResults.Tag"
            :key="result.id"
          >
            <g-link :to="result.path">
              <h3>{{ result.title }}</h3>
            </g-link>
          </li>
        </ul>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      const r = this.$search.search({query: searchTerm,
        limit: 5,
        // field: 'tags'
        // page: true
        // suggest: true
      })

      const results = {
        'Post' : [],
        'Tag' : []
      }

      r.forEach(result => {
        if (result) results[result.index].push(result)
      });

      console.log(r)
      console.log(results)
      return results
    }
  }
}
</script>
