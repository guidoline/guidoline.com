// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
/** Shoelace **/
// import '@shoelace-style/shoelace/dist/themes/light.css'
// Cherrypick
// import '@shoelace-style/shoelace/dist/components/input/input.js'
// import '@shoelace-style/shoelace/dist/components/button/button.js'
// import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
// setBasePath('dist/shoelace')
// import ShoelaceModelDirective from '@shoelace-style/vue-sl-model'
/** Chibilib **/
// import { ChibiTitle } from 'chibilib'
// import { ChibiButton } from 'chibilib'
// import Chibilib from 'chibilib'

// import '~@chibilib/dist/chibilib.css'
// import '~/assets/css/styles.css'
import '~/plugins/filters.js'
import '~/assets/css/variables.css'
const Markdown = require('markdown-it')

export default function (Vue, { router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Shoelace
  // Vue.use(ShoelaceModelDirective)
  // Vue.config.ignoredElement = [/^sl-/]
  // Chibilib
  // Vue.use(Chibilib)
  // console.log(Chibilib)
  // Vue.component('chibi-title', ChibiTitle)
  // Vue.component('chibi-button', ChibiButton)
  router.options.linkActiveClass = 'is-active'
  router.options.linkExactActiveClass = 'is-active-exact'

  /**
   * Custom directive
   * https://vuejs.org/v2/guide/custom-directive.html
   */
  Vue.directive('markdown', {
    bind: function(el, binding, vnode) {
      if (binding.value === undefined) {
        return null
      }

      const md = new Markdown()
      const content = md.render(binding.value)
      el.innerHTML = content
    }
  })
}
