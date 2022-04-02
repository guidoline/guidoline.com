/**
 * @todo Lazy loading des composants https://shouts.dev/articles/vuejs-lazy-loading-components-in-vue-router et https://stackabuse.com/lazy-loading-routes-with-vue-router/

 * @todo Lazy loading des images
 */
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routerOptions } from './router'
// Store
import store from './store'
import { useRootStore } from './store/modules/root'
// Composants
import ZComponents from './components/Z'
// Layouts
import LayoutDefault from './layouts/Default.vue'
import LayoutHome from './layouts/Home.vue'
import LayoutDistractionFree from './layouts/DistractionFree.vue'
import LayoutMarkdown from './layouts/Markdown.vue'

// @todo mettre en œuvre une barre de progression : https://github.com/tangyouge/vue3-progress/tree/main/src
// Windi
import 'virtual:windi.css'
import 'virtual:windi-devtools'

export const createApp = ViteSSG(
  App,
  routerOptions,
  // https://github.com/antfu/vite-ssg#initial-state
  ({ app, router, routes, isClient, initialState }) => {
    // Cahrger les composants
    app.component('LayoutDefault', LayoutDefault)
    app.component('LayoutHome', LayoutHome)
    app.component('LayoutDistractionFree', LayoutDistractionFree)
    app.component('LayoutMarkdown', LayoutMarkdown)
    app.use(ZComponents)
    // Initialisation du store
    app.use(store)

    if (import.meta.env.SSR) {
      // Utiliser state hydratation
      // https://pinia.vuejs.org/ssr/#state-hydration
      initialState.pinia = store.state.value
    } else {
      store.state.value = initialState.pinia || {}
    }

    const rootStore = useRootStore(store)

    // Hook des routes
    router.beforeEach((to, from, next) => {
      // Initialisation du store global
      if (!rootStore.ready) rootStore.initialize()
      // Activer le loader
      if (isClient) rootStore.$patch({ loading: true })
      next()
    })
    router.beforeResolve((to, from, next) => {
      // Arreter le loader
      if (isClient) rootStore.$patch({ loading: false })
      next()
    })
    // Tester avec after each
    router.afterEach((to, form) => {})
  }
)
