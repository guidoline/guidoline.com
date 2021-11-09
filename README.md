# Starter simple avec Vite, Vite-SSG et Vue

Starter sans route dynamiques.

Les contenus Markdwown sont importé via `vite-plugin-md`, les routes sont généré via `vite-plugin-pages`.

@todo : 
 - [×] linters (editor, es, style) ;
 - [×] système de layout ;
 - [×] fichier Markdown ;
 - [×] routes & routes dynamiques ;
 - [×] framework CSS (Windi CSS) ;
 - [×] tester la configuration Vite et Rollup de Windi CSS ;
 - [×] importation auto d'icônes ;
 - [ ] framework de composant Shoelace (lus le module de directive two way) ;
 - [ ] test/valider le mariage Shoelace et WindiCSS ;
 - [ ] composants hors build (noSSR) ;
 - [ ] dark mode ;
 - [ ] génération de marqueurs d'images responsives (cd [Remark images](https://github.com/florianeckerstorfer/remark-images)) ;
 - [ ] Retaillage automatique des images responsives ;
 - [ ] Injecter `vue-router` sur les liens relatifs Markdown correspondant à une des routes ; 
 - [ ] preview & lazyload des images ;
 - [ ] optimisations diverses (PWA, images, CSS…) cf. [Antfu blog](https://github.com/antfu/antfu.me/blob/main/vite.config.ts).

## Dépendances

Documentation : [Vitesse](https://github.com/antfu/vitesse/blob/main/package.json)

### Production
 - [×] vue@next ;
 - [×] @vueuse/head@latest ;
 - [×] vue-router@next ;



### Dev

 - [×] @vue/compiler-sfc ;
 - [×] vite ;
 - [×] vite-ssg ;
 - [×] vite-plugin-md ;
 - [×] @vitejs/plugin-vue ;
 - @vue/server-renderer ?;
 - [×] @heroicons/vue ;
 - z-components ;
 - [×] vite-plugin-pages ;
 - [×] vite-plugin-windicss :
 - [×] windicss ;
 - [×] windicss-analysis ;
 - [×] cross-env;
 - cssnano ? ;
 - [×] eslint ;
 - [×] eslint-config-standard ;
 - [×] eslint-standard ;
 - [×] eslint-plugin-import ;
 - [×] eslint-plugin-node ;
 - [×] eslint-plugin-promise ;
 - [×] stylelint ;
 - [×] stylelint-order ;
 - [×] stylelint-config-rational-order ;
 - [×] stylelint-config-standard ;
 - vue-eslint-parser ? ;
 - vue-svg-loader ? ;
