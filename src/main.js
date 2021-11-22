import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import { createRouter } from './router'
const routes = createRouter().getRoutes() || []

import store from './store'
import { useContentsStore } from './store/modules/contents'
import ZComponents from './components/Z'
import LayoutDefault from './layouts/Default.vue'
import LayoutHome from './layouts/Home.vue'
import LayoutSimple from './layouts/Simple.vue'
import LayoutMarkdown from './layouts/Markdown.vue'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

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
    // @todo: auto charger les layout
    app.component('LayoutDefault', LayoutDefault)
    app.component('LayoutHome', LayoutHome)
    app.component('LayoutSimple', LayoutSimple)
    app.component('LayoutMarkdown', LayoutMarkdown)

    app.use(store)
    app.use(ZComponents)

    if (import.meta.env.SSR) {
      // Faire des chose SSR à chaque invocation de route si besoin.
    }
  }
)
