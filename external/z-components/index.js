import ZTitle from './title.vue'
import ZMenu from './menu.vue'
import ZButton from './button.vue'
import ZIcon from './icon.vue'
import ZInset from './layout/inset.vue'
import ZPagination from './layout/pagination.vue'
import ZGrid from './layout/grid.vue'
import ZGridExp from './layout/grid-exp.vue'
import ZLayoutBlocks from './layout/blocks.vue'
// import windiComponents from './windi-components.js'
// https://stackoverflow.com/questions/43814830/destructuring-a-default-export-object
export default {
  // windiComponents,
  'z-title': ZTitle,
  'z-menu': ZMenu,
  'z-button': ZButton,
  'z-icon': ZIcon,
  'z-inset': ZInset,
  'z-pagination': ZPagination,
  'z-grid': ZGrid,
  'z-grid-exp': ZGridExp,
  'z-layout-blocks': ZLayoutBlocks
}
