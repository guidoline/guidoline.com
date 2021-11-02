/** Faciliter l'importation des composants Vue **/
import layoutDefault from './Default.vue'
import layoutDefaultHome from './Default/Home.vue'
import layoutDefaultArticle from './Default/Article.vue'
import layoutSimple from './Simple.vue'
import layoutSimpleNewsletter from './Simple/Newsletter.vue'
import layoutSimpleInformation from './Simple/Information.vue'
export default {
  'layout-default': layoutDefault,
  'layout-simple': layoutSimple,
  'layout-home': layoutDefaultHome,
  'layout-article': layoutDefaultArticle,
  'layout-newsletter': layoutSimpleNewsletter,
  'layout-information': layoutSimpleInformation
}
