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

export default defineConfig(({ command, mode }) => ({
  define: {
    '__VUE_PROD_DEVTOOLS__': 'true'
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@/': `${resolve(__dirname, '.')}/`
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      isCustomElement: (tag) => tag.includes('-')
    }),
    windicss(),
    vueSvg({ svgo: false }),
    mdToJson({ vite: { command, mode }})
  ],
  server: { fs: { strict: true } },
  build: {
    sourcemap: false,
    manifest: true,
    ssrManifest: true
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
      // 1. compter toutes les routes `/blog/`
      // 2. calculer les routes d'index du blog basé sur la pagination
      // 2bis. unifier la pagination (avec `blog.vue`)
      // 3. ajouter les routes d'index aux routes globale
      console.log('——————————————————————————————————————————————')
      console.log('Rendu SSG des routes ')
      console.log('——————————————————————————————————————————————')
      routes.forEach(r => { console.log(r) })
      console.log('\n')
      routes = routes.map(route => {
        switch(route) {
          case '/:pathMatch(.*)*': return '404'
          case '/pages/:slug+': return false
          case '/blog/:folio(\\d+)?': return 'blog'
          case '/blog/:year(\\d{4})/:month(\\d{2})/:slug': return false
          case '/blog/archives/:year(\\d{4})?/:month(\\d{2})?': return '/blog/archives'
          case '/blog/categorie/:category/:folio(\\d+)?': return false
          case '/blog/etiquette/:tag/:folio(\\d+)?': return false
          default: return route
        }
      }).filter(r => r !== false)

      // @todo: générer les routes dynamiques pour le SSG via le store
      // Articles
      // articleStore.articles.forEach(a => {
      //   routes.push(a.path)
      // })
      // blog folio
      // blog Archives
      // blog catégories
      // blog etiquettes
      return routes
    }
  }
}))
