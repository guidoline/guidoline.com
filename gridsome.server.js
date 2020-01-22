// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // api.loadSource(actions => {
  //   const content = actions.addCollection('Content')

  //   content.addReference('related', 'Related')

  // })

  /**
   * Patch pour @gridsome/remark
   */
  api.loadSource(({addSchemaResolvers}) => {
    addSchemaResolvers({
      Post: {
        excerpt(obj) {

          if (obj.excerpt) {
            return obj.excerpt;
          }

          if (obj.description) {
            return obj.description;
          }

          const lines = obj.content.split('\n');
          let excerpt = '';

          for (index in lines) {
            excerpt = lines[index].trim();

            if (excerpt) {
              break;
            }
          }

          const elipsis = (excerpt.length > 200) ? '…' : '';
          return excerpt.replace(/^(.{200}[^\s]*).*/, "$1" + elipsis);
        }
      }
    })
  })
  api.loadSource(({ addSchemaTypes }) => {
    // Contenu en relation
    addSchemaTypes(`
      type Content implements Node @infer {
        author: Author @reference(by: "fileInfo.path")
        related_content: Related @reference(by: "fileInfo.path")
        related_contents: [Related] @reference(by: "fileInfo.path")
      }
    `);
  })
}
