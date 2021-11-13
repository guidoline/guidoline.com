import {
  createMemoryHistory,
  createWebHistory,
  createRouter as _createRouter
} from 'vue-router'

// Création de routes à partir d'un répertoire de composants
const pages = import.meta.glob('./pages/**/*.vue')
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
    let props = () => {}
    const meta = {}
    switch (name) {
      case 'welcome':
        path = '/'
        meta.layout = 'home'
        break
      case '404':
        path = '/:pathMatch(.*)*'
        meta.excludeFromNavigation = true
        break
      case 'journal':
        name = 'journal-folio'
        path = '/journal/:folio(\\d+)?'
        props = (route) => ({
          folio: Number(route.param.folio) || 1
        })
        break
      default:
    }

    routes.push({
      name,
      path,
      component: pages[componentPath],
      props,
      meta
    })

    return routes
  }, [])
  console.log('ROUTES : ', routes)

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
