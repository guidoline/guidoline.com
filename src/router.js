/**
 * Configuration du routeur
 *
 * @todo: scroll behavior: https://github.com/GionDesign/Vite-and-Vue-3-Base-Starter-Template/blob/9574f5fc680ea936749af50d67fc47b506e1bd2c/src/router/index.js#L5
 *
 * @todo: clean that mess!
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

/**
 * Création de routes basé sur les pages `vue`.
 */
const routes = Object.keys(pages)
  .reduce((routes, componentPath) => {
    // Extraction du chemin de base du composant
    const filename = componentPath.match(/\.\/pages(.*)\.vue$/)
    if (!filename?.length) return routes
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

    let beforeEnter = (to, from, next) => {
      if (to.path === null) {
        next({ name: '404', params: [to.path] })
      } else {
        const content = contentStore.content(to.path)
        Object.assign(to.meta, { props: { content } })
        next()
      }
    }
    let props = true
    const meta = {
      props: {}
    }
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
          folio: Number(route.params.folio) || 1
        })
        break
      case 'journal-category':
        path = '/journal/categorie/:category/:folio(\\d+)?',
        props = (route) => ({
          category: route.params.category,
          folio: Number(route.params.folio) || 1
        })
        break
      case 'journal-etiquette':
        path = '/journal/etiquette/:tag/:folio(\\d+)?',
        props = (route) => ({
          tag: route.params.tag,
          folio: Number(route.params.folio) || 1
        })
        break
      // @todo: Paramètres obligatoire
      // permettre de modifier le composant et http:status
      // depuis le `switch`
      // https://github.com/vuejs/vue-router/issues/977
      case 'journal-archives':
        path = '/journal/archives/:year(\\d+)?/:month(\\d+)?'
        props = (route) => ({
          year: Number(route.params.year),
          month: Number(route.params.month) || null
        })
        break
      case 'pages':
        // Parmètre de route répetable
        // https://router.vuejs.org/guide/essentials/route-matching-syntax.html#repeatable-params
        path = '/pages/:slug+'
        beforeEnter = (to, from, next) => {
          const content = contentStore.content(to.path)
          if (!content) {
            // @todo: à corriger 404 est appelé en attendant
            // le chargement de content
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
          console.log('STYLEGUIDE ', to)
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

// Styleguide, ajout de l'index
routes.push({
  name: 'styleguide-index',
  path: '/styleguide',
  props: { content: contentStore.content('/styleguide') },
  component: () => import('./pages/Pages.vue')
})

// Articles
routes.push({
  name: 'journal-article',
  path: '/journal/:year(\\d+)?/:month(\\d+)?/:slug',
  // @todo tester le chargement asynchrone
  // beforeEnter: async (to, from, next) => {
  beforeEnter: (to, from, next) => {
    // Lancer un 404 si le contenu n'existe pas
    // https://github.com/vuejs/vue-router/issues/977#issuecomment-266221374
    const article = articlesStore.getArticle(to.path)
    if (!article) {
      next({ name: '404', params: [to.path] })
    } else {
      Object.assign(to.meta, { props: { content: article } })
      next()
    }
  },
  props: (route) => {
    const article = articlesStore.getArticle(route.path)
    return { content : article }
  },
  component: () => import('./pages/Journal/Article.vue')
})



// @todo: Concatener avec `routes` de la même manière que les fichiers `.vue`
// (comme si c'était des ficheirs "virtuelles")
if (import.meta.env.SSR) {
  // Articles

  articlesStore.articles.forEach(a => {
    routes.push({
      name: a.name,
      path: a.path,
      props: {
        content: a
      },
      component: () => import('./pages/Journal/Article.vue')
    })
  })

  // @todo : génerer de manière génrique tout les contenus
  // provenant du store `contents` (`contents` => `getPages`) et `getArticles`
  // Les contenu ne doivent pas être chargées de manière asynchrone par
  // `route.beforeEnter`.
  // Le composant doit correspondre au chemin du contenu :
  // ex. `content/articles` `./src/articles.vue`
  contentStore.contents.forEach(c => {
    // console.log('CCC', c.name, c.path)
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


  // Pagination
  const pagesCount = Math.ceil(articlesStore.articles.length / articlesStore.limit)
  for (let i = 1; i < pagesCount + 1; i ++) {
    console.log('FOLIO ', i)
    routes.push({
      name: `journal-folio-${i}`,
      path: `/journal/${i}`,
      component: () => import('./pages/Journal.vue')
    })
  }

  // Archives
  // Categories
  articlesStore.getCategories().forEach(c => {
    const limit = 10
    const categoryRoute = {
      name: `journal-category-${c.slug}`,
      path: c.to,
      props: {
        category: c.slug,
        folio: 1
      },
      component: () => import('./pages/Journal/Category.vue')
    }
    routes.push(categoryRoute)
    const count = articlesStore.getCategoryArticles(c.slug).length
    const pagesCount = Math.ceil(count / limit)
    for (let i = 1; i < pagesCount + 1; i ++) {
      routes.push( {
        name: `journal-category-${c.slug}-${i}`,
        path: `${c.to}/${i}`,
        props: {
          category: c.slug,
          folio: i
        },
        component: () => import('./pages/Journal/Category.vue')
      })
    }
  })

  // Étiquettes
  articlesStore.getTags().forEach(t => {
    const limit = 10
    const tagRoute = {
      name: `journal-tag-${t.slug}`,
      path: t.to,
      props: {
        tag: t.slug,
        folio: 1
      },
      component: () => import('./pages/Journal/Etiquette.vue')
    }
    routes.push(tagRoute)
    const count = articlesStore.getTagArticles(t.slug).length
    const pagesCount = Math.ceil(count / limit)
    for (let i = 1; i < pagesCount + 1; i ++) {
      routes.push( {
        name: `journal-tag-${t.slug}-${i}`,
        path: `${t.to}/${i}`,
        props: {
          tag: t.slug,
          folio: i
        },
        component: () => import('./pages/Journal/Etiquette.vue')
      })
    }
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
    || document.getElementsByTagName('main')[0]
    if (content) return { el: content, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
}
