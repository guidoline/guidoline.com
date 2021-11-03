import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import generatedRoutes from 'virtual:generated-pages'
import ZComponents from 'z-components'
import LayoutDefault from './layouts/Default.vue'
import LayoutSimple from './layouts/Simple.vue'
import LayoutMarkdown from './layouts/Markdown.vue'
import 'virtual:windi.css'
// Modification / contrôle des routes
const routes = generatedRoutes
// Ajout de composants Vue comme route
// @todo: à gérer dans un fichier spécifique `./routes.js`
const pages = import.meta.glob('./pages/**/*.vue')
Object.keys(pages).forEach(componentPath => {
  const filename = componentPath.match(/\.\/pages(.*)\.vue$/)
  if (filename.length) {
    // Normalisation de chemin (portion d'url)
    let path = filename[1]
    // .replace(/(?<=[A-Z])([A-Z])+/, m => `-${m}`)
    .replace(/(?<!\/)[A-Z]/g, m => `-${m}`)
    .toLowerCase()
    // Normalisation du nom
    let name = path
    .replace(/\//, '')
    .replace(/\//g, '-')
    console.log("ROUTE : ", filename[1], path)
    // https://router.vuejs.org/fr/guide/essentials/passing-props.html#mode-booleen
    let props = true
    const meta = {
      // layout: 'default'
    }
    // Ajout de règle de routeur
    switch (name) {
      case 'index':
        path = '/'
        // meta.layout = 'default'
        break
      case '404':
        path = '/:pathMatch(.*)*'
        meta.excludeFromNavigation = true
        break
      case 'journal':
        name = 'journal-folio'
        // Noneed, généré à la mano cf. plus bas
        // path = '/journal'
        // props = { folio: 1 }
        // path = '/journal/:folio(\\d+)?'
        path = '/journal/:folio(\\d+)?'
        // props = (route) => ({
        //   folio: Number(route.params.folio) || 1
        // })
        break
      default: path
    }
    routes.push({
      name,
      path,
      component: pages[componentPath],
      props,
      meta
    })
  }
})
// routes.push({
//   name: 'admin',
//   path: '/admin',
//   alias: '/admin/index.html#/',
//   // redirect: '/admin/index.html#/'
// })
routes.push({
  name: 'Journal',
  path: '/journal',
  component: pages['./src/pages/Journal.vue'],
  props: { folio: 3 },
  params: { folio: 2}
})
// @todo: ajouter uns route pour les journal/[slug] ?

  // @todo : debuggage état initial routes `journal/n`
  // explorer du coté de createApp:routes et createApp:router
  // la proprieté folio semble bien transmisse, mais la liste
  // ne se rafraichit pas. Ne serait-ce pas un soucis de réactivité tout
  // simplement.

  // const articlesPerPage = 10 // À unifier dans un module de pagination
  // const articlesCount = routes.filter(r => r.path.startsWith('/journal/')).length
  // const pagesCount = Math.ceil(articlesCount / articlesPerPage)
  // const routeJournal = routes.find(page => page.name === 'journal-index')
  // for (let i = pagesCount; i; i --) {
  //   // routes.push(`/journal/${i}`)
  //   routes.push({
  //     // ...routeJournal,
  //     name: `journal-page-${i}`,
  //     path: `/journal/${i}`,
  //     props: { folio: i },
  //     component: routeJournal.component,
  //     meta: {
  //       ...routeJournal.meta,
  //       excludeFromNavigation: true
  //     }
  //   })
  // }

  console.log('GROUTES : ', routes)
  export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, routes, isClient, initialState }) => {
      // @todo: ajouter un chargement auto des composant dans `App.vue`
      app.component('LayoutDefault', LayoutDefault)
      app.component('LayoutSimple', LayoutSimple)
      app.component('LayoutMarkdown', LayoutMarkdown)
      // @todo :  tenter d'etendre l'ancien système de layout définie dans main
      //  1. Choisi auto par vite-plugin-md (un template local peut être appliqué en fonction d'une varaible du front matter) :
//    <template>
//      <Layout> // <== définie dans `main.js`
//        <slot/> // <== MD injecté ici
//      </Layout>
//    </template>
      //  2. accès au contexte route à partir d'ici
      // app.component('Layout', nomDuLayout)
      // app.config.devtools = true
      for (const component in ZComponents) {
        app.component(component, ZComponents[component])
      }
    }
)
