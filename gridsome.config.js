// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Guidoline',
  siteURL: process.env.URL,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PageEntry',
        baseDir: './content/pages',
        path: '*.md',
        resolveAbsolutePaths: true,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        baseDir: './content',
        path: 'authors/*.md',
        resolveAbsolutePaths: true,
      }
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     baseDir: './content',
    //     path: '**/*.md',
    //     typeName: 'Related',
    //     resolveAbsolutePaths: true,
    //   }
    // },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content',
        path: 'blog/**/[!index]*.md',
        resolveAbsolutePaths: true,
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      },
      // ESt-ce que cette configuration de template
      // est bien prise en compte ici ?
      templates: {
        // Post: '/blog/:year/:month/:title',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Book',
        baseDir: './content/books/',
        pathPrefix: 'book',
        path: '*/index.md',
        // refs: {
        //   chapter: 'Chapter'
        //   // chapter: {
        //   //   typeName: 'Chapter',
        //   //   create: true,
        //   // }
        // }
      },
    },
    // Ajouter typeName BookPage
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BookPage',
        baseDir: './content/books/',
        pathPrefix: 'book',
        // path: '*/[!index]*.md',
        path: '**/[!index]*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BookFile',
        baseDir: './content/books/',
        prefix: 'file',
        path: '**/*.md'
      }
    },
    /**
     * Note : Créer la liaison (Book.ref) à la main
     * Besoin d'identifié le chapite par son `path`
     * Besoin de référencer le parent.
     * À priori, ces deux impératfs ne sont pas
     * géré par source-filesystem
     */
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BookChapter',
        baseDir: './content/books/',
        pathPrefix: 'book',
        // path: '*/chapitre-*/index.md',
        path: '**/chapitre-*/index.md',
        // refs: {
        //   book: 'Book'
        // }
      },
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'BookChapterPage',
    //     baseDir: './content/books/',
    //     pathPrefix: 'book',
    //     // path: '*/chapitre-*/[!index]*.md'
    //     path: '**/chapitre-*/[!index]*.md'
    //   }
    // },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'description', 'tags']
          },
          {
            typeName: 'Tag',
            indexName: 'Tag',
            fields: ['title']
          }
        ],
        searchFields: ['title', 'description', 'content', 'tags'],
        suggest: true,
        page: true,
      }
    }
  ],
  templates: {
    Tag: '/tag/:title',
    Category: '/category/:title',
    // Book: [
    //   {
    //     path: '/book/:title',
    //     component: './src/templates/Book.vue'
    //   }
    // ],
    // BookPage: [
    //   {
    //     path: '/book/:path',
    //     component: '.src/templates/BookPage.vue'
    //   }
    // ],
    // Chapter: [
    //   {
    //     // path: '/book/:fileInfo__path',
    //     // path: '/book/:fileInfo__directory/:title',
    //     path: '/book/:path',
    //     component: './src/template/Chapter.vue'
    //   }
    //   // {
    //   //   name: 'entretenir-son-velo',
    //   //   path: '/entretenir-son-velo/chapitre/:title',
    //   //   component: '.src/templates/book/Chapter.vue'
    //   // }
    // ],
  },
  transformers: {
    remark: {}
  }
}
