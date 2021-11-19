import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import { createRouter } from './router'
const routes = createRouter().getRoutes() || []

import store from './store'
import { useContentsStore } from './store/modules/contents'

import ZComponents from 'z-components'
import LayoutDefault from './layouts/Default.vue'
import LayoutHome from './layouts/Home.vue'
import LayoutSimple from './layouts/Simple.vue'
import LayoutMarkdown from './layouts/Markdown.vue'

import 'virtual:windi.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    // routes(routes) {
    //   console.log('ROUTES FROM CREATE APP : ', routes.map(r => r.path))
    //   return routes
    // },
    scrollBehavior(to, from, savedPostion) {
      if (savedPostion) return savedPostion
      if (to.hash)  return { el: to.hash, behavior: 'smooth' }
      const content = document.getElementById('content')
      || document.getElementsByTagName('main')[0]
      if (content) return { el: content, behavior: 'smooth' }
      return { top: 0, behavior: 'smooth' }
    }
  },
  ({ app, router, routes, isClient, initialState }) => {
    // @todo: ajouter un chargement auto des composant dans `App.vue`
    app.component('LayoutDefault', LayoutDefault)
    app.component('LayoutHome', LayoutHome)
    app.component('LayoutSimple', LayoutSimple)
    app.component('LayoutMarkdown', LayoutMarkdown)
    for (const component in ZComponents) {
      app.component(component, ZComponents[component])
    }
    app.use(store)
    // Générer les routes dynamique ici (SSR ony) (exemple : les folios et la pagination)
    console.log('MAIN ARE SSR : ', import.meta.env.SSR)
    if (import.meta.env.SSR) {
      console.log('Render route : ', routes.map(r => r.path))
    }
    // console.log('ROUTES FROM MAIN : ', routes.map(r => r.path))
  }
)
