import { defineStore } from 'pinia'
import { data } from '@pluginMdToJson'

export const useContentsStore = defineStore({
  id: 'Contents',
  state() {
    return {
      ready: false,
      contents: [],
      articlesPerPage: 10
    }
  },
  getters: {
    isReady: state => state.ready,
    publishedContents(state) {
      return state.contents
      return state.contents.filter(c => c.publised === true)
    },
    content(state) {
      return (path) => this.publishedContents.find(c => c.path === path)
    },
    contentsCount(state) {
      return this.publishedContents.length
    },
    pages() {
      return this.publishedContents.filter(c => c.dirname === 'content/pages' || c.dirname === 'content')
    },
    page() {
      return (path) => this.pages.find(c => c.path === path)
    },
    articles() {
      return this.publishedContents.filter(c => c.dirname.startsWith('content/journal'))
    },
    articlesCount() { return this.articles.length },
    article() {
      return (path) => this.articles.find(c => c.path === path)
    }
  },
  actions: {
    async initialize() {
      if (this.isReady) return
      this.ready = true
      this.contents = data.map(c => ({ ...c, path: c.path === '/index' ? '/' : c.path}))
      // Chainable
      // return this
    }
  }
})

// Utilitaires
const orderedContents = (contents) => {}
const sortContent = (contents) => {}
