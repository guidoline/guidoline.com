import { defineStore } from 'pinia'
export const useRootStore = defineStore({
  id: 'Root',
  state() {
    return {
      ready: false,
      loading: false
    }
  },
  getters: {
    isReady: state => state.ready,
    // isLoading: state => state.loading
  },
  actions: {
    initialize() {
      if (this.isReady) return
      this.ready = true
      this.loading = true
    }
  }
})
