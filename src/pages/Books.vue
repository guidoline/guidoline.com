<template>
  <Layout>
    <h1>Liste des livres</h1>
    <p>
      <b>Ressources</b>
      <ul>
        <li>
          <a href="https://carlalexander.ca/write-book-markdown/">https://carlalexander.ca/write-book-markdown/</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Table_of_contents">https://en.wikipedia.org/wiki/Table_of_contents</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/vue-markdown-book">https://www.npmjs.com/package/vue-markdown-book</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/md-book">https://www.npmjs.com/package/md-book</a>
        </li>
        <li>
          <a href="https://pandoc.org/">https://pandoc.org/</a>
        </li>
      </ul>
      <b>Fonctionnalités attendues</b>
      <ul>
        <li>Gestion de la couverture</li>
        <li>Génération d'une table des matières</li>
        <li>Insertion des nom d'auteurs sur les entrées de la table des matières</li>
        <li>Génération d'un glossaire (optionnel)</li>
      </ul>
    </p>
    <article
      v-for="book in books"
      :key="book.id"
    >
      <h1><g-link :to="book.path">{{ book.title }}</g-link></h1>
      {{ book.content }}
      <section v-if="book.chapter">
        <h1>Sommaire</h1>
        <ul>
          <li
           v-for="chapter in book.chapter"
           :key="chapter.id"
          >
            <g-link :to="chapter.path">{{ chapter.title }}</g-link>
          </li>
        </ul>
      </section>
      <section v-if="book.excerpt">
        <h1>Extrait</h1>
        <!-- TODO: crér un filtre `markdownify` -->
        {{ book.excerpt }}
      </section>
    </article>
  </Layout>
</template>
<page-query>
query {
  allBook {
    edges {
      node {
        id
        path
        title
        excerpt
        description
      }
    }
  }
}
</page-query>
<script>
export default {
  name: 'Books',
  computed: {
    books() {
      return this.$page.allBook.edges.map(edge => edge.node)
    }
  }
}
</script>
