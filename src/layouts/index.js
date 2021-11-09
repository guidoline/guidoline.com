/** Faciliter l'importation des composants Vue **/
import layoutDefault from './Default.vue'
import layoutHome from './Home.vue'
import layoutEmpty from './Empty.vue'
import layoutSimple from './Simple.vue'
// Template
// import layoutDefaultHome from './Default/Home.vue'
// import layoutDefaultArticle from './Default/Article.vue'
// import layoutSimpleNewsletter from './Simple/Newsletter.vue'
// import layoutSimpleInformation from './Simple/Information.vue'
export default {
  'layout-default': layoutDefault,
  'layout-home': layoutHome,
  'layout-simple': layoutSimple,
  'layout-empty': layoutEmpty,
  // Template
  // 'layout-home': layoutDefaultHome,
  // 'layout-article': layoutDefaultArticle,
  // 'layout-newsletter': layoutSimpleNewsletter,
  // 'layout-information': layoutSimpleInformation
}
