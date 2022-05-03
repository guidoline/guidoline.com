/**
 * Configuration du routeur
 *
 * @todo si publish vaut false lancer une 404.
 * @todo rennommer `.src/pages` en `./src/views`
 * @todo revoir le layout : https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b
 */

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
contentStore.initialize()
const articlesStore = useArticlesStore(createPinia())
articlesStore.initialize()

// Création de routes à partir d'un répertoire de composants.
// Chacun de ces fichiers doit avoir un équivalent de contenu dans le
// reperoitre `content`.
const pages = import.meta.glob('./pages/**/*.vue')

/**
 * Création de routes basé sur les composants `./src/pages`.
 */
const routes = Object.keys(pages)
  .reduce((routes, componentPath) => {
    // Extraction du chemin de base du composant
    const filename = componentPath.match(/\.\/pages(.*)\.vue$/)
    if (!filename.length) return routes
    // Remplacer le CamelCase par du snake case
    let path = filename[1]
      .replace(/(?<!\/)[A-Z]/g, p =>`-${p}`)
      .toLowerCase()
    // Remplacement des barres obliques `/` par des tirets séprateurs `-`
    let name = path
      .replace(/\//, '')
      .replace(/\//g, '-')

    // Contenu asynchrone avec Vue router 4
    // let beforeEnter = async (to, from, next) => {
    //   const content = await contentStore.content(to.path)
    //   ...
    // }
    let beforeEnter = (to, from, next) => {
      if (to.path === null) {
        next({ name: '404', params: [to.path] })
      } else {
        const content = contentStore.content(to.path)
        Object.assign(to.meta, { props: { content } })
        next()
      }
    }

    // Passer les paramètres en propriété de composant
    // https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
    let props = true

    // Information complémentaires à attacher à la route
    // https://router.vuejs.org/guide/advanced/meta.html
    const meta = {
      props: {}
    }

    // Routes imbriquées
    // https://router.vuejs.org/guide/essentials/nested-routes.html
    let children = []

    // Création des routes basé sur les nom du fichier
    switch (name) {
      case 'welcome':
        path = '/'
        meta.layout = 'home'
        props = (route) => ({ content: route.meta.props.content })
        break
      case '404':
        path = '/:pathMatch(.*)*'
        meta.excludeFromNavigation = true
        // ?
        props = (route) => ({ content: route.meta.props.content })
        break
      case 'blog':
        name = 'blog-index'
        path = '/blog/:folio(\\d+)?'
        props = (route) => ({
          folio: Number(route.params.folio) || 1
        })
        beforeEnter = null
        break
      case 'blog-article':
        name = 'blog-article'
        path = '/blog/:year(\\d{4})/:month(\\d{2})/:slug'
        props = (route) => ({ content:  articlesStore.getArticle(route.path) })
        beforeEnter = (to, from, next) => {
          const article = articlesStore.getArticle(to.path)
          if (!article) {
            next({ name: '404', params: [to.path] })
          } else {
            Object.assign(to.meta, { props: { content: article } })
            next()
          }
        }
        break
      case 'blog-category':
        path = '/blog/categorie/:category',
        props = (route) => ({ category: route.params.category })
        beforeEnter = (to, from, next) => {
          if (articlesStore.categoryExist(to.params.category)) {
            next()
          } else {
            next({ name: '404', params: [to.path] })
          }
        }
        break
      case 'blog-etiquette':
        path = '/blog/etiquette/:tag',
        props = (route) => ({ tag: route.params.tag })
        beforeEnter = (to, from, next) => {
          if (articlesStore.tagExist(to.params.tag)) {
            next()
          } else {
            next({ name: '404', params: [to.path] })
          }
        }
        break
      case 'blog-archives':
        // @todo le classement par mois est overkill, nettoyer tout ça
        path = '/blog/archives/:year(\\d{4})?/:month(\\d{2})?'
        props = (route) => ({
          year: Number(route.params.year),
          month: Number(route.params.month) || null
        })
        break
      case 'pages':
        path = '/pages/:slug+'
        // @note utiliser une source de contenu générique `content`
        // (actuellement `articles` et `content`) permettrait de definie un
        // `beforeEnter` générique.
        // @note plutôt qu'une redirection 404, remplacer le composant de
        // contenu par le composant `404.vue` et fournir un `HTTP status 404`.
        beforeEnter = (to, from, next) => {
          const content = contentStore.content(to.path)
          if (!content) {
            next({ name: '404', params: [to.path] })
          } else {
            Object.assign(to.meta, { props: { content } })
            next()
          }
        }
        props = (route) => {
          const content = contentStore.content(route.path)
          return { content: content }
        }
        break
      case 'styleguide':
        path = '/styleguide/:slug+'
        beforeEnter = (to, from, next) => {
          const content = contentStore.content(to.path)
          if (!content) {
            next({ name: '404', params: [to.path] })
          } else {
            Object.assign(to.meta, { props: { content }})
            next()
          }
        }
        props = (route) => {
          const content = contentStore.content(route.path)
          return { content: content }
        }
        break
      default:
        // Les autres pages sans contenu transmis par la route :
        // pages `index`, `404`, etc.
        props = (route) => {
          const content = contentStore.content(route.path)
          return { content: content }
        }
    }

    routes.push({
      path,
      name,
      component: pages[componentPath],
      beforeEnter,
      props,
      meta,
      children
    })

    return routes
  }, [])

// Ajout de pages aditionnelles
// Styleguide, ajout de l'index
routes.push({
  name: 'styleguide-index',
  path: '/styleguide',
  props: { content: contentStore.content('/styleguide') },
  component: () => import('./pages/Pages.vue')
})

// Genération des pages virtuelles pour le SSG
if (import.meta.env.SSR) {
  // Articles
  articlesStore.articles.forEach(a => {
    routes.push({
      name: a.name,
      path: a.path,
      props: {
        content: a
      },
      component: () => import('./pages/Blog/Article.vue')
    })
  })

  //
  contentStore.contents.forEach(c => {
    routes.push({
      name: c.name,
      path: c.path,
      props: {
        content: c
      },
      component: () => {
        const comp = 'Pages'
        return import(`./pages/${comp}.vue`)
      }
    })
  })

  // Index de blog & pagination
  const pagesCount = Math.ceil(articlesStore.articles.length / articlesStore.limit)
  for (let i = 1; i < pagesCount + 1; i ++) {
    routes.push({
      name: `blog-folio-${i}`,
      path: `/blog/${i}`,
      props: {
        folio: Number(i)
      },
      component: () => import('./pages/Blog.vue')
    })
  }

  // Categories du blog
  articlesStore.getCategories().forEach(c => {
    const limit = 10
    const categoryRoute = {
      name: `blog-category-${c.slug}`,
      path: c.to,
      props: { category: c.slug },
      component: () => import('./pages/Blog/Category.vue')
    }
    routes.push(categoryRoute)
  })

  // Étiquettes du blog
  articlesStore.getTags().forEach(t => {
    const tagRoute = {
      name: `blog-tag-${t.slug}`,
      path: t.to,
      props: { tag: t.slug },
      component: () => import('./pages/Blog/Etiquette.vue')
    }
    routes.push(tagRoute)
  })

  // Archives du blog
  Object.keys(articlesStore.articlesByDate()).forEach(y => {
    const yearRoute = {
      name: `blog-archives-year-${y}`,
      path: `/blog/archives/${y}`,
      props: {
        year: Number(y)
      },
      component: () => import('./pages/Blog/Archives.vue')
    }
    routes.push(yearRoute)
  })

  console.log('\n——————————————————————————————————————————————')
  console.log('Géneration des routes SSR')
  console.log('——————————————————————————————————————————————')
  routes.forEach(r => { console.log(r.path)})
  console.log('\n')
}

/**
 * Exporter une configuration pour Vue router
 */

export const routerOptions = {
  // https://router.vuejs.org/guide/essentials/history-mode.html#netlify
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  linkActiveClass: 'is-active',
  sensitive: false,
  strict: false,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash)  return { el: to.hash, behavior: 'smooth' }
    const content = document.getElementById('content')
    || document.getElementsByTagName('main')[0] || document.getElementById('app')
    if (content) return { el: content, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
}
