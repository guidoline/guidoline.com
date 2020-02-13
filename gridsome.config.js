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
        baseDir: './content',
        path: '*.md',
        typeName: 'Content',
        resolveAbsolutePaths: true,
        // index: ['welcome'],

        // refs: {
        //   author: {
        //     typeName: 'Author'
        //   }
        // }
        // refs: {
          // related: 'Related'
          // related: {
          //   typeName: 'Related',
          //   create: true
          // },
          // sections: {
          //   typeName: 'Related'
          // }
        // }
      },
      templates: {
        // ex. `src/templates/welcome.vue`
        Content: '/:fileinfo__name'
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: 'authors/*.md',
        typeName: 'Author',
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
        baseDir: './content',
        path: 'blog/**/*.md',
        typeName: 'Post',
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
      templates: {
        Post: '/blog/:year/:month/:title',
      }
    },
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
    Category: '/category/:title'
  },
  transformers: {
    remark: {}
  }
}
