import ZTitle from './title.vue'
import ZMenu from './menu.vue'
import ZButton from './button.vue'
import ZTag from './tag.vue'
import ZIcon from './icon.vue'
import ZInset from './layout/inset.vue'
import ZPagination from './layout/pagination.vue'
import ZGrid from './layout/grid.vue'
import ZLayoutBlocks from './layout/blocks.vue'
// import windiComponents from './windi-components.js'
// https://stackoverflow.com/questions/43814830/destructuring-a-default-export-object
export default {
  // windiComponents,
  'z-title': ZTitle,
  'z-menu': ZMenu,
  'z-button': ZButton,
  'z-tag': ZTag,
  'z-icon': ZIcon,
  'z-inset': ZInset,
  'z-pagination': ZPagination,
  'z-grid': ZGrid,
  'z-layout-blocks': ZLayoutBlocks
}
