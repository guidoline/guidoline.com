import { defineStore } from 'pinia'
import { data } from '@pluginMdToJson'
import { slugify, ucFirst } from '@/src/services/utilities.js'

export const useArticlesStore = defineStore({
  id: 'Articles',
  state() {
    return {
      ready: false,
      articles: [],
      limit: 10,
    }
  },
  getters: {
    isReady: state => state.ready,
    // limit: state => state.offset + state.articlesPerPage,
    // count: state => state.articles.length,
    getArticles: state => state.articles,
    getArticle: state => (path) => state.articles.find(c => c.path === path),
    // Categories list
    // @todo: Ajouter le compte d'article par catégorie et par étiquette
    // cf. ancien projets.
    getCategories: state => () => {
      return state.articles.reduce((categories, article) => {
        if (!categories.find(c => c.name === article.category.name)) {
          categories.push(article.category)
        }
        return categories
      }, [])
    },
    // Tags list
    getTags: state => () => {
      return state.articles.reduce((tags, article) => {
        if (!article.tags) return tags
        const tagsIds = Object.values(tags).map(t => t.slug)
        article.tags.forEach(tag => {
          if (!tags.some(t => t.slug === tag.slug)) {
            tags.push(tag)
          }
        })
        return tags
      }, [])
    },
    // Articles d'une categorie
    getCategoryArticles(state) {
      return (category) => {
        return filterBy(state.articles, 'category', 'callback',
          (prop) => prop.slug === category
        )
      }
    },
    // Articles d'une étiquette
    getTagArticles: (state) => (tag) =>
      filterBy(state.articles, 'tags', 'callback',
        (prop) => prop.some(p => p.slug === tag)
    ),
    // getPaginateArticles: (state) => {
    //   const limit = state.limit
    //   const count = state.articles.length
    //   const pagesCount = Math.ceil(count / limit)
    //   const articlesRoutes = []
    //   for (const i = 1; i < pagesCount; i ++) {
    //     articlesRoutes.push(`(/journal/${i})`)
    //   }
    //   return articlesRoutes
    // },

    // Articles groupés par catégories (usages ?)
    articlesByDate: state => () => groupBy(state.articles, 'date'),
    articlesByCategories: state => () => groupBy(state.articles, 'category'),
    articlesByTag: state => (tag) => groupBy(state.articles, 'tag')

  },
  actions: {
    // async initialize() {
    initialize() {
      if (this.isReady) return
      this.ready = true
      this.setArticles()
      // Que les articles publiés
      // Filter by
      // this.articles = filterBy(this.articles, 'publish')
      // Sort by ==> [props][asc/desc]
      this.articles = orderBy(this.articles)
      // Apply data filter
      this.articles = this.articles.map(a => applyFilters(a))

      // console.log('ARTICLES FROM STORE : ', this.articles.map(a => a.path))
      // Links pagination
      this.articles = this.articles.map((a, index) => {
        const pagination = neighbors(index, this.articles)
        return {
          // 'raw-date': new Date(a.date),
          pagination,
          ...a
        }
      })

      if(import.meta.env.SSR) {
        console.log('\n——————————————————————————————————————————————')
        console.log('Chargement des données du Store ')
        console.log('——————————————————————————————————————————————')
        console.log(`${this.articles.length} articles`)
        console.log('\n')
      }

      // Chainable
      return this
    },
    // Can do that !
    // L'état du store restera d'une route à l'autre
    // Le filtrage doit être fait sur un getter
    // trouver un moyen (simple) d'avoir une pagination non globale
    // articles.pagination
    // categoryArticles.pagination
    // tagArticles.pagination
    // => Ne pas passer (partager) l'offset via le store
    filterByCategory(category) {
      this.articles = filterBy(this.articles, 'category', 'callback',
        (prop) => prop.slug === category
      )
    },
    setArticles() {
      const dateOptions = { dateStyle: 'long'}
      this.articles = data.filter(c => {
        return c.dirname.startsWith('content/journal')
      })
      // Filtres de données
      .map(f => {
        return {
          category: f.category || 'Lecture',
          template: slugify(f.category || 'article'),
          'raw-date': Date.parse(f.date),
          'formatted-date': new Date(Date.parse(f.date))
            .toLocaleDateString('fr-FR', dateOptions),
          ...f
        }
      })
      // Ordonné par date descendante
      .reverse()
    },
  }
})

// Utilitaires
/**
 * @todo : créer un prototype de modèle :
 * ~~~
 * dataModel = {
 *  data: [],
 *  orderBy: => {},
 *  filterBy: () => {},
 *  groupBy: () => {},
 *  pagination: () -> {},
 * }
 *
 * articles = Object.create(dataModel)
 * ~~~
 */
 const neighbors = (index, entries) => {
  const lastIndex = entries.length - 1
  const previousId = index - 1 < 0 ? lastIndex : index - 1
  const nextId = index + 1 > lastIndex ? 0 : index + 1
  const previous = entries[previousId]
  const next = entries[nextId]
  return {
    previous: {
      name: previous['short-title'] || previous.title ||previous.name,
      to: previous.path
    },
    next: {
      name: next['short-title'] || next.title || next.name,
      to: next.path
    }
  }
}

// @todo: permettre de filter sur des contenu imbriqués
// Nécessaire pour les catégory et les étiquettes
/**
 *
 * Type de modèle :
 * ~~~
 * {
 *  title: 'Exemple',
 *  category: {
 *    name: 'Exemple',
 *    slug: 'exemple',
 *    to: '/journal/categorie/exemple'
 *  },
 *  tags: [
 *    {
 *     name: 'Exemple',
 *     slug: 'exemple',
 *     to: '/journal/tag/exemple'
 *    }
 *  ],
 *  simplObject: { 1: 'a', 2: 'b', 3: 'c' },
 *  simpleArray: ['a', 'b', 'c', 'd'],
 * }
 * ~~~
 *
 * Exemple d'usages ;
 * ~~~
 * filterBy(data, 'publish')
 * filterBy(data, 'title', '=', 'Hello')
 * filterBy(data, 'id', '>', 1)
 * filterBy(data, 'id', '<', 2)
 * filterBy(data, 'id', 'in', [1, 2])
 * filterBy(data, 'category', 'callback', (prop) =>
 *    prop.slug === 'slug-d-une-category')
 * filterBy(data, 'tags', 'callback', (prop) =>
 *    prop.some(p => p.slug === 'etiquette-par-defaut' ))
 * ~~~
 * @param {Array} entries List of data
 * @param {String} prop Prop to check
 * @param {String} op Operator
 * @param {Mixed} value value to check
 * @returns
 */
const filterBy = (entries, prop, op, value = true) => {
  // Regex sur les dot `.` de `prop`
  // Par exemple : `category.slug` = 'lecture'
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  return entries.filter(e => {
    if (!e[prop]) return false
    switch (op) {
      case '>': return e[prop] > value
      case '<': return e[prop] < value
      case 'has':
        const p = typeof e[prop] === 'object' ? Object.value(e[prop]) : e[prop]
        return p.includes(value)
      case 'in': return value.includes(e[prop])
      case 'callback': return value(e[prop])
      default: return e[prop] === value
    }
  })
}

const orderBy = (entries, prop = 'raw-date', order = 'desc') => {
  return entries.sort((a, b) => {
    const valueA = a[prop]
    const valueB = b[prop]
    if (valueA > valueB) return order === 'desc' ? -1 : 1
    if (valueA < valueB) return order === 'desc' ? 1 : -1
    return 0
  })
}

const groupBy = (entries, prop, callback) => {
 return entries.reduce((archives, e) => {
    const date = new Date(Date.parse(e.date))
    const year = date.getFullYear()
    if (!year) return archives
    const month = new Date(date).toLocaleDateString('fr-FR', { month: 'long'})
    if (!month) return archives
    if (!archives[year]) archives[year] = { name: year, months: {} }
    if (!archives[year][month]) archives[year]['months'][month] = { name: ucFirst(month), articles: []}
    archives[year]['months'][month]['articles'].push(e)
    return archives
 }, {})
}

// Filtres de données
// @todo: externaliser
const applyFilters = (entry) => {
  const transformedEntry = {}
  for (const [key, value] of Object.entries(entry)) {
    // console.log('KEY / VALUE : ', key, value)
    transformedEntry[key] = runFilter(key, value)
  }
  return transformedEntry
}

const runFilter = (key, value) => {
  const callback = getFilter(key)
  if (!callback) return value
  return callback(value)
}

const getFilter = (key) => filters[key]

// Définition des filtres de données
import { stringsToURL } from '~/services/utilities'

const filters = {
  category: (value) => stringsToURL('/journal/categorie/', [value]).shift(),
  tags: (value) => stringsToURL('/journal/etiquette/', value)
}


// https://immutable-js.com/docs/v4.0.0/Map/#sortBy()
// @chainables :
// data.filterBy('publish').orderBy('title')

// Une alternative plus simple à la création d'un prototype :
// Définir les méthodes prévue pour ce prototype (before / after, groupBy, orderBy, etc.) comme actions de Pinia.&

// Prototype itérable
const dataModel = {
  *[Symbol.iterator] () { yield* this.data },
  // Data dit être immuable (à considérer comme une BDD distante)
  data: [],
  // getPagination,
  // filterBy
}
// data.set(uid, {uid; title: 'hello})
// data.has(uid)
// data.get(uid)
// data.delete(uid)
// data.size
// data.forEAch
// data.keys
// data.values
// for (const [value, key] of data)
// https://livecodestream.dev/post/how-to-use-generator-and-yield-in-javascript/
