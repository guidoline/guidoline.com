import {
  createMemoryHistory,
  createWebHistory,
  createRouter as _createRouter
} from 'vue-router'


// Exemple async
// https://github.com/vuejs/vue-router/issues/1923#issuecomment-668189324

import { createPinia } from 'pinia'
import { useContentsStore } from './store/modules/contents'
import { useArticlesStore } from './store/modules/articles'
const contentStore = useContentsStore(createPinia())
// await contentStore.initialize()
 contentStore.initialize()
 const articlesStore = useArticlesStore(createPinia())
 articlesStore.initialize()

// Création de routes à partir d'un répertoire de composants
const pages = import.meta.glob('./pages/**/*.vue')
// @Todo: tester l'auto chargement de composant à partir des données du store :
// const pages = contentStore.contents() // <== permet de générer les routes
// des pages "virtuelles" (pages d'articles du journal par exemple)
// Permettrer facilement de générer les pages dynamiques de pagination (le
// sera en charge de générer les données de pagination store)
// Voir si les composants/route (ex. `src/pages/journal/[slug].vue`) (Nuxt) ont
// une place dans cette solution. Ou si il est préférable d'avoir ce genre de
// composants dans un répertoire "hors routes" (ex: `src/templates/articles.vue`) (Gridsome)

const routes = Object.keys(pages)
  .reduce((routes, componentPath) => {
    // Extraction du chemin de base du composant
    const filename = componentPath.match(/\.\/pages(.*)\.vue$/)
    if (!filename?.length) return routes
    // Remplacer le CamelCase par du snake case
    let path = filename[1]
      .replace(/(?<!\/)[A-Z]/g, p =>`-${p}`)
      .toLowerCase()
    // Remplacer les barres obliques `/` par des tirets séprateurs `-`
    let name = path
      .replace(/\//, '')
      .replace(/\//g, '-')
    // let props = () => {}
    // Contenu asynchrone avec Vue router 4
    const beforeEnter = async (to, from, next) => {
      // const content = await contentStore.content(to.path)
      const content = contentStore.content(to.path)
      Object.assign(to.meta, { props: { content } })
      next()
    }
    let props = true
    // let props = (route) => ({
    //   content: route.meta.props.content
    // })
    const meta = {}
    switch (name) {
      case 'welcome':
        path = '/'
        meta.layout = 'home'
        props = (route) => ({
          content: route.meta.props.content
        })
        break
      case '404':
        path = '/:pathMatch(.*)*'
        meta.excludeFromNavigation = true
        // ?
        props = (route) => ({
          content: route.meta.props.content
        })
        break
      case 'journal':
        name = 'journal-folio'
        path = '/journal/:folio(\\d+)?'
        props = (route) => ({
          // content: route.meta.props.content,
          folio: Number(route.params.folio) || 1
        })
        break
      case 'journal-category':
        path = '/journal/categorie/:category/:folio(\\d+)?',
        props = (route) => ({
          category: route.params.category,
          folio: Number(route.params.folio) || 1
        })
        break
      case 'journal-etiquette':
        path = '/journal/etiquette/:tag/:volio(\\d+)?',
        props = (route) => ({
          tag: route.params.tag,
          folio: Number(route.params.folio) || 1
        })
        break
      // @todo: Paramètres obligatoire
      // permettre de modifier le compoant et http:status
      // depuis le `switch`
      // https://github.com/vuejs/vue-router/issues/977
      case 'journal-archives':
        path = '/journal/archives/:year(\\d+)?/:month(\\d+)?'
        props = (route) => ({
          year: Number(route.params.year),
          month: Number(route.params.month) || null
        })
        break
      // @todo
      // case 'journal[year]':
      //   break
      // case 'journal[year][month]':
      //   break
      default:
        // 404 ou Index
        props = (route) => ({
          content: route.meta.props.content
        })
    }

    routes.push({
      beforeEnter,
      name,
      path,
      component: pages[componentPath],
      props,
      meta
    })

    return routes
  }, [])

// contentStore.publishedContents.map(c => {
//   console.log('ROUTES FROM DATA : ', {
//     path: c.path,
//     dirname: c.dirname,
//     name: c.name,
//     layout: c.layout,
//     template: c.template
//   })
// })

// Articles
routes.push({
  name: 'journal-article',
  path: '/journal/:year(\\d+)?/:month(\\d+)?/:slug',
  beforeEnter: async (to, from, next) => {
    // https://github.com/vuejs/vue-router/issues/977#issuecomment-266221374
    const article = articlesStore.getArticle(to.path)
    // console.log('TO : ', to)
    if (!article) {
      // next({name: '404', params: [to.path], replace: true})
      next({ name: '404', params: [to.path] })
      // next({ alias: '404'})
      // next('/404')
    } else {
      Object.assign(to.meta, { props: { content: article } })
      next()
    }
  },
  props: (route) => {
    const article = articlesStore.getArticle(route.path)
    return { content : article }
  },
  // props: (route) => ({
  //   content: route.meta.props.content || null
  // }),
  component: () => import('./pages/Journal/Article.vue')
  // component: () => import('./templates/article.vue')
})

// Générer les pages dynamiques ici (SSR only) :
// - `journal/[year]/[month]/[slug]`
// - `journal/archives/[year]/[month]`
// - `journal/etiquette/[slug]`
// - `journal/categorie/[slug]`
console.log('ROUTER ARE SSR : ', import.meta.env.SSR)
// console.log('ROUTES FROM ROUTER : ', routes.map(r => r.path))

if (import.meta.env.SSR) {
  console.log('# ADD SSR ROUTES #')
  // Articles

  articlesStore.articles.forEach(a => {
    console.log('ADD ROUTE : ', a.name)
    routes.push({
      name: a.name,
      path: a.path,
      props: {
        content: a
      },
      component: () => import('./pages/Journal/Article.vue')
    })
  })

  // Pagination
  const pagesCount = Math.ceil(articlesStore.count / articlesStore.articlesPerPage)
  for (let i = 1; i <= pagesCount; i ++) {
    console.log('# ADD ARTICL PAGINATION FOLIO : ', i)
    routes.push({
      name: `journal-folio-${i}`,
      path: `/journal/${i}`,
      component: () => import('./pages/Journal.vue')
    })
  }

  // Archives
  // Étiquettes
  // Categories
}

console.log("# ROUTES COUNT : ", routes.count)

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
