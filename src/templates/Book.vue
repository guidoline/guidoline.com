<template>
  <Layout>
    <code>Book.vue</code>
    <pre>
      <Tree :tree="orderedBookFiles"/>
      <template
        v-for="file in bookFiles"
      >
        <span :key="file.id">
          {{ file.fileInfo.directory }}
          {{ file.fileInfo.path }}
        </span>
      </template>
    </pre>
    <div v-html="book.content"></div>
    <section v-if="book.pages">
      <h1>Sommaire <small>(Liste de toutes les pages)</small></h1>
      <ul>
        <li
          v-for="page in book.pages"
          :key="page.id"
        >
          <g-link :to="page.path">{{ page.title }}</g-link>
        </li>
      </ul>
    </section>
    <section v-if="book.chapters">
      <h1>Chapitres</h1>
      <ul>
        <li
          v-for="chapter in book.chapters"
          :key="chapter.id"
        >
          <g-link :to="chapter.path">{{ chapter.title }}</g-link>
          <ul v-if="chapter.pages.length">
            <li
              v-for="chapterPage in chapter.pages"
              :key="chapterPage.id"
            >
              <g-link :to="chapterPage.path">{{ chapterPage.title }}</g-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </Layout>
</template>
<script>
import Section from '../components/Section.vue'
import Tree from '@/components/Tree.vue'
export default {
  name: 'Book',
  components: {
    Tree
  },
  methods: {
    /**
     * Produire : un méthode plus générique et itérative
     */
    getFilteredChapter(filter) {
      return this.$page.allBookChapter.edges
        .filter(({ node }) => {
          return !node.path.search(filter)
        })
        .map(edge => {
          const filterChapter = new RegExp(`^${edge.node.path}`, 'g')
          return Object.assign(edge.node, {
            pages: this.getFilteredChapterPage(filterChapter)
          })
        })
    },
    getFilteredChapterPage(filter) {
      return this.$page.allBookPage.edges
        .filter(({ node }) => {
          return !node.path.search(filter)
        })
        .map(edge => edge.node)
    }
  },
  computed: {
    bookFiles() {
      return this.$page.allBookFile.edges
        .map(edge => edge.node)
    },
    orderedBookFiles() {
      const files = []
      this.bookFiles.forEach(file => {
        const index = files.findIndex(e => {
          return e.fileInfo.directory === file.fileInfo.directory
        })
        if (index === -1) {
          files.push({
            fileInfo: {
              directory: file.fileInfo.directory
            },
            files: [file]
          })
        }
        // Use for in & continue
        else {
          files[index].files.push(file)
        }
      })
      return files
      return [
        {
          name: "Article"
        },
        {
          name: "Chapitre",
          files: [
            {
              name: "Chapitre article",
              files: [
                {
                  name: "Chapitre Article Article"
                }
              ]
            }
          ]
        }
      ]
      return this.bookFiles
    },
    book() {
      let book = this.$page.book
    /**
     * Ajout des chapitres
     * Tout les fichiers de chapitres situé dans le même repertoire
     * sont selectionnés.
     * Noter que les chapitres sont pré-filter dans la définittion du
     * type `Chapter` dans le fichier `gridsome.config.js`
     */
      const filter = new RegExp(`^${book.path}`, 'g')
        Object.assign(book, {
          chapters: this.getFilteredChapter(filter),
          // chapters: this.$page.allChapter.edges
          //   .map(edge => edge.node)
          //   .filter(chapter => {
          //     return !chapter.fileInfo.directory
          //       .search(filter)
            // }),
          pages: this.$page.allBookPage.edges
            .map(edge => edge.node)
            .filter(page => {
              return !page.path
                .search(filter)
            })
        })
      return book
    }
  }
}
</script>
<page-query>
query($path: String) {
  allBookFile (sortBy: "fileInfo.path") {
    edges {
      node {
        id
        path
        fileInfo {
          path
          directory
        }
        title
      }
    }
  }
  book(path: $path) {
    id
    path
    fileInfo {
      directory
    }
    title
    excerpt
    content
  }
  allBookPage (sortBy: "title") {
    edges {
      node {
        id
        path
        fileInfo {
          directory
          path
          name
        }
        title

      }
    }
  }
  allBookChapter (sortBy: "title") {
    edges {
      node {
        id
        path
        fileInfo {
          directory
        }
        title
      }
    }
  }
}
</page-query>
