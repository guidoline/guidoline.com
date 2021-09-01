// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(async ({ createPage, graphql }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  //   const { data } = await graphql(`{
  //     allBook {
  //       edges {
  //         node {
  //           path
  //         }
  //       }
  //     }
  //   }`)

  //   data.allBook.edges.forEach(edge => {
  //     createPage({
  //       path: edge.node.path,
  //       component: `./src/templates/Book.vue`,
  //       context: {
  //         chapterFilterPath: `^${edge.node.path}`,
  //       }
  //     })
  //   })
  // })

  api.loadSource(actions => {
    const posts = actions.addCollection('Post');
    // Note: normalement cela est géré par `source-filesystem`
    // https://gridsome.org/plugins/@gridsome/source-filesystem
    posts.addReference('tag', 'Tag');
    posts.addReference('category', 'Category');

    // const content = actions.addCollection('Content')
    // content.addReference('related', 'Related')

    // Ajout de relations automatiques
    // const books = actions.addCollection('Book')
    // books.addReference('autoChapter', 'Chapter')
    // forEach => trouver les chapitres, joindre les chapitres
    // Ou via un resolver ?
  })

  const makeExcerpt = (obj) => {
    if (obj.excerpt) return obj.excerpt
    if (obj.description) return obj.description
    const lines = obj.content.split('\n')
    let excerpt = ''

    for (index in lines) {
      excerpt = lines[index].trim();
      // The first line should'n be Markdown title
      is_title = excerpt.indexOf('#') === 0;
      if (excerpt && ! is_title) break
    }

    const elipsis = (excerpt.length > 500) ? '…' : '';
    return excerpt.replace(/^(.{500}[^\s]*).*/, "$1" + elipsis);
  }

  /**
   * Patch pour @gridsome/remark
   */
  api.loadSource(({addSchemaResolvers, graphql}) => {
    addSchemaResolvers({
      Post: {
        excerpt: {
          type: 'String',
          resolve(obj){ return makeExcerpt(obj) }
        }
      },
      PageEntry: {
        excerpt: {
          type: 'String',
          resolve(obj){ return makeExcerpt(obj) }
        }
      }
    })
  })
  api.loadSource(({ addSchemaTypes }) => {
    // Contenu en relation
    // addSchemaTypes(`
    //   type Content implements Node @infer {
    //     author: Author @reference(by: "fileInfo.path")
    //     related_content: Related @reference(by: "fileInfo.path")
    //     related_contents: [Related] @reference(by: "fileInfo.path")
    //   }
    //   type Post implements Node @infer {
    //     author: Author @reference(by: "fileInfo.path")
    //     related_posts: [Post] @reference(by: "fileInfo.path")
    //   }
    // `);
    addSchemaTypes(`
      type Post implements Node @infer {
        author: Author @reference(by: "fileInfo.path")
        related_posts: [Post] @reference(by: "fileInfo.path")
      }
    `);
  })
}
