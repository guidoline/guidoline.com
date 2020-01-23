// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
const markdown = require('markdown-it');
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/styles.css'

export default function (Vue, { router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  router.options.linkActiveClass = 'is-active'
  router.options.linkExactActiveClass = 'is-active-exact'

  /**
   * Custom directive
   * https://vuejs.org/v2/guide/custom-directive.html
   */
  Vue.directive('markdown', {
    bind: function(el, binding, vnode) {

      if ( binding.value == undefined) {
        return null;
      }

      const md = new markdown();
      const content = md.render(binding.value);
      el.innerHTML = content;
    }
  })
}
