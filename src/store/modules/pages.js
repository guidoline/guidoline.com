import { defineStore } from 'pinia'
import { data } from '@pluginMdToJson'

export const usePagesStore = defineStore({
  id: 'Pages',
  state() {
    return {
      ready: false,
      pages: []
    }
  },
  getters: {
    isReady: state => state.ready,
    publishedPages(state) {
      return state.pages
      return state.pages.filter(p => p.publised === true)
    },
    page(state) {
      // return (path) => state.pages.find(p => p.path = path)

      return (path) => this.publishedPages.find(p => p.path === path)
    }
  },
  actions: {
    async initialize() {
      if (this.isReady) return
      this.ready = true
      this.pages = data
    }
  }
})
