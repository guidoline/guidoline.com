import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSvg from '@vuetter/vite-plugin-vue-svg'
import windicss from 'vite-plugin-windicss'
import mdToJson from './pluginMdToJson.js'
import { resolve } from 'path'

// Store
// import { createPinia } from 'pinia'
// import { useArticlesStore } from './src/store/modules/articles'
// const articleStore = useArticlesStore(createPinia())
// import { data } from '@pluginMdToJson'
// articleStore.initialize(data)
// articleStore.initialize()

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
    dirStyle: 'nested',
    includedRoutes(routes) {
      // @note: Pas d'accès à `import` ici.
      // console.log('VITE CONFIG ARE SSR : ', import.meta.env.SSR)
      // @todo :
      // 1. compter toutes les routes `/journal/`
      // 2. calculer les routes d'index du journal basé sur la pagination
      // 2bis. unifier la pagination (avec `journal.vue`)
      // 3. ajouter les routes d'index aux routes globale
      console.log('——————————————————————————————————————————————')
      console.log('Rendu SSG des routes ')
      console.log('——————————————————————————————————————————————')
      routes.forEach(r => { console.log(r) })
      console.log('\n')
      routes = routes.map(route => {
        switch(route) {
          case '/:pathMatch(.*)*': return '404'
          case '/pages/:slug': return false
          case '/journal/:folio(\\d+)?': return 'journal'
          case '/journal/:year(\\d+)?/:month(\\d+)?/:slug': return false
          case '/journal/archives/:year(\\d+)?/:month(\\d+)?': return '/journal/archives'
          case '/journal/categorie/:category/:folio(\\d+)?': return false
          case '/journal/etiquette/:tag/:folio(\\d+)?': return false
          default: return route
        }
      }).filter(r => r !== false)

      // @todo: générer les routes dynamiques pour le SSG via le store
      // Articles
      // articleStore.articles.forEach(a => {
      //   routes.push(a.path)
      // })
      // Journal folio
      // Journal Archives
      // Journal catégories
      // Journal etiquettes
      return routes
    }
  }
})
