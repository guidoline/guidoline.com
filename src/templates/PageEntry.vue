<template>
  <layout>
    <article>
      <!-- Todo: Créer un compoesnant spécial pour les héros -->
      <Cover
        v-if="page.hero"
        :cover="page.hero"
      />
      <div v-html="page.content"/>
    </article>
  </layout>
</template>

<script>
import Cover from '@/components/Cover'
export default {
  name: 'PageEntry',
  components: { Cover },
  computed: {
    page () { return this.$page.pageEntry }
  }
}
</script>

<page-query>
query pageEntry($path: String) {
  pageEntry(path: $path) {
    id
    path
    title
    excerpt
    content
    hero {
      src
      alt
      legend
      link {
        text
        href
        icon
        color
      }
    }
  }
}
</page-query>
