import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSvg from './external/vite-plugin-vue-svg/src'
import windicss from 'vite-plugin-windicss'
import mdToJson from './pluginMdToJson.js'
import { resolve } from 'path'

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
    windicss(),
    vueSvg({ svgo: false }),
    mdToJson()
  ],
  server: { fs: { strict: true } },
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

      return routes
    }
  }
})
