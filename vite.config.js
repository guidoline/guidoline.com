import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages' // routeur
import markdown from 'vite-plugin-md'
import markdownItTableOfContents from 'markdown-it-table-of-contents'
import markdownItAnchor from 'markdown-it-anchor'
// import markdownItLinkAttributes from 'markdown-it-link-attributes'
import { slugify } from './src/services/utilities.js'
// import vueSvg from './pluginSVG'
// import vueSvg from 'rollup-plugin-vue-inline-svg'
// import vueSvg from '@vuetter/vite-plugin-vue-svg'
import vueSvg from './external/vite-plugin-vue-svg/src'
import fs from 'fs'
import grayMatter from 'gray-matter'
import windicss from 'vite-plugin-windicss'
import { resolve } from 'path'
import { markdownify } from './src/services/utilities'
// import markdownIt from 'markdown-it'

// const mardownify = (data) => {
//   return new markdownIt({
//     html: false,
//     linkify: false, // Éviter les liens dans les extraits
//     typographer: true,
//     quotes: ['«\x40', '\x40»', '‹\x40', '\x40›']
//   }).render(data)
// }

export default defineConfig({
  define: {
    '__VUE_PROD_DEVTOOLS__': 'true'
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@/': `${resolve(__dirname, '.')}/`,
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    pages({
      extensions: ['md'],
      // extensions: ['vue', 'md'],
      pagesDir: 'content',
      extendRoute(route) {
        // Lecture du composant pout peupler les metas du routeur
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const entry = grayMatter(md, {
          // Extraction / géneration de l'extrait
          // https://github.com/jonschlinkert/gray-matter#optionsexcerpt
          excerpt: (file) => {
            file.data.excerpt =
              file.data.description ||
              file.data.excerpt ||
              file.content.split('\n').slice(0, 4).join(' ')
            file.data.excerpt = ['information'].includes(file.data.layout) ? file.content : file.data.excerpt
            // Suppression des titres MD
            // @todo: à terme, ne conserver que les marqueurs md de base.
            file.data.excerpt = file.data.excerpt.replace(/[#]+/g, '')
            // Rendu Markdown
            file.data.excerpt = markdownify(file.data.excerpt)
          },
        })
        // Définir le template
        const template = entry.data.template ||  false
        // @todo: ajouter un chargement automatique de template basé
        // sur la route (fallback : contrôle de l'existence du temaplate)
        route.meta = Object.assign(route.meta || {}, {
          title: entry.data.title,
          description: entry.data.description
            || entry.content
              .split('\n').slice(0, 4)
              .join(' ').replace(/[#]+/g, '')
              .trim(),
          excerpt: entry.data.excerpt,
          date: entry.data.date,
          cover: entry.data.cover,
          // @todo: faire une liste blanche plutôt
          //  (`includeInMenu | menu(s) : main | footer | all`)
          excludeFromNavigation: true,
          // Layout par défaut
          // layout: entry.data.layout ? entry.data.layout : 'default',
          layout: entry.data.layout || 'default',
          template: template
        })
        return route
      }
    }),
    markdown({
      headEnabled: true,
      // wrapperClasses: 'prose-container',
      wrapperComponent: 'LayoutMarkdown',
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        quotes: ['«\x40', '\x40»', '‹\x40', '\x40›'],
      },
      markdownItSetup(md) {
        // md.use(markdownItLinkAttributes)
        md.use(markdownItAnchor, {
          level: [2],
          slugify,
          permalink: markdownItAnchor.permalink.headerLink()
          // permalink: markdownItAnchor.permalink.symbol()
        }),
        md.use(markdownItTableOfContents, {
          includeLevel: [2],
          slugify
        })
      }
    }),
    windicss(),
    vueSvg({
      // htmlWrapper: {
      //   tagName: 'span',
      //   attrs: {
      //       class: 'ui-icon',
      //   },
      // },
      svgo: false
    })
  ],
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    // sourcemap: true,
    // manifest: true,
    // ssrManifest: true
  },
  // Documentation sur `vite-ssg:ssgOptions` :
  // https://github.com/antfu/vite-ssg/blob/main/src/types.ts
  ssgOptions: {
    // cf. includeAllRoute
    // includeAllRoutes: true,
    includedRoutes(routes) {
      // @todo :
      // 1. compter toutes les routes `/journal/`
      // 2. calculer les routes d'index du journal basé sur la pagination
      // 2bis. unifier la pagination (avec `journal.vue`)
      // 3. ajouter les routes d'index aux routes globale
      routes = routes.map(route => {
        switch(route) {
          case '/:pathMatch(.*)*': return '404'
          case '/journal/:folio(\\d+)?': return 'journal'
          default: return route
        }
      })

      // Routes dynamiques pour `/journal`
      const articlesPerPage = 10 // À unifier dans un module de pagination
      const articlesCount = routes.filter(r => r.startsWith('/journal/')).length
      const pagesCount = Math.ceil(articlesCount / articlesPerPage)
      for (let i = pagesCount; i; i --) {
        routes.push(`/journal/${i}`)
      }

      // routes.forEach(r => {
      //   console.log('Route : ', r)
      // })
      return routes
    }
  }
})
