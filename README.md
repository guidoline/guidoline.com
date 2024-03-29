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
 - [ ] framework de composant Shoelace (plus le module de directive two way) ;
 - [ ] test/valider le mariage Shoelace et WindiCSS ;
 - [ ] composants hors build (noSSR) ;
 - [x] dark mode ;
 - [x] génération de marqueurs d'images responsives (cd [Remark images](https://github.com/florianeckerstorfer/remark-images)) ;
 - [x] Retaillage automatique des images responsives ;
 - [ ] Injecter `vue-router` sur les liens relatifs Markdown correspondant à une des routes ; 
 - [x] preview & lazyload des images ;
 - [ ] optimisations diverses (PWA, images, CSS…) cf. [Antfu blog](https://github.com/antfu/antfu.me/blob/main/vite.config.ts).

 ## Convention pour les routes et les données

Les routes sont définies à partir des composants Vue disponible dans le repertoire `./src/pages/`.

Chaque composant de page tenteras de charger automatiquement le fichier correspondant dans le repertoire de contenu Markdown correspondant au chemin. Par exemple : l'url `/a-propos`, tenteras de charger un composant `pages/Apropos.vue` et un contenu `./content/a-propos.md`. Le contenu sera injecté via la propriété (`props`) `content`.

Une URL pointant un repertoire de données, par exemple `./content/journal/`, chargera le composant correspondant (`./src/pages/Journal.vue`) et mettras à disposition via la proprietés (`props`) `content` la liste des données.

Exemples : 
| Nom | Route | Composant | Fichier Markdown | 
| - | - | - | - | 
| home | `/` | `Index.vue` | `index.md`
| à propos | `/a-propos` | `APropos.vue` | `a-propos.md`
| contacts | `/a-propos/contact` | `APropos/Contact.vue` | `a-propos/contact.md`
| journal | `/journal` | `Journal.vue` | `callback` |
| journal folio | `/journal/:folio` | `Journal.vue` | `callback` |
| article | `/journal/:slug` | `Journal/[slug].vue`| `callback` |

Les routes dynamiques (par ex. `:folio`, `:slug`) devrons être manuellement générées lors de la phase SSG.

## Serveur local

Démarrage du servuer : 
~~~
npm run dev
~~~

Serveur & interface d'administration 
~~~
npm run admin
~~~

L'interface d'administration est à l'addresse `/admin/index.html`.

## Dépendances

Documentation : 
 - [Vitesse](https://github.com/antfu/vitesse/blob/main/package.json)
 - [installation Vite/Vue3/TS](https://miyauchi.dev/posts/vite-vue3-typescript/)

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


## Éditorial CMS

Description des templates :
- `home` : SEO, contenu, sections et couverture
- `page` : SEO, contenu
- `journal.article` : SEO, contenu, couverture, catégories, étiquettes et articles en relation
- `journal.event` : SEO, contenu, couverture, date de début, date de fin, lieu et articles en relation
- `journal.information` : SEO, contenu
- `journal.story` : Idem `journal.article`, mais bénificie d'un template plus confortable pour la lecture et d'un galerie d'images
- `author` : Nom et adresse email


@todo: cleaner les vue qui doivent correspondre au templates de contenu
Actuelement nous avons des Layouts et des Templates, essayer d'uniformiser ça afin de n'avoir que des templates à gérer. Prendre en compte l'imbrication de rendu Composant Markdown

## Nom de domaine 

### Netlify

Se rendre sur Site > Domains management > Custom domains > Add domain alias.

Saisir le nom de domaine ou de sous domaine, puis cliquer sur Delegate.

Configurer le DNS du registrar, ajouter un CNAME `{SOUS-DOMAINE} CNAME {NETLIFY-SITE-ID}.netlify.app.` à la zone DNS.
