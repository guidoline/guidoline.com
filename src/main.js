import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import { routerOptions } from './router'

import store from './store'
import ZComponents from './components/Z'
import LayoutDefault from './layouts/Default.vue'
import LayoutHome from './layouts/Home.vue'
import LayoutDistractionFree from './layouts/DistractionFree.vue'
import LayoutMarkdown from './layouts/Markdown.vue'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

export const createApp = ViteSSG(
  App,
  routerOptions,
  ({ app, router, routes, isClient, initialState }) => {
    // auto chargement des layouts
    // for (const layoutName in layouts) {
    //   console.log('chargement du layout : ', layoutName)
    //   app.component(layoutName, layouts[layoutName])
    // }
    // @todo: auto charger les layout
    app.component('LayoutDefault', LayoutDefault)
    app.component('LayoutHome', LayoutHome)
    app.component('LayoutDistractionFree', LayoutDistractionFree)
    app.component('LayoutMarkdown', LayoutMarkdown)

    app.use(store)
    app.use(ZComponents)

    if (import.meta.env.SSR) {
      // Faire des chose SSR à chaque invocation de route si besoin.
    }
  }
)
