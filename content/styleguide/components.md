---
title: Composants | Guide de Style
links:
  - name: 'Typographie'
    to: '/styleguide/typographie'
  - name: 'Composants'
    to: '/styleguide/components'
---

<z-menu :links="frontmatter.links" />

# Composants

### Table des matières
[[TOC]]


## Layouts

### Inset

@todo : 
- rennomage : layout-blocks => inset ;
- exploiter correctement `windiwCSS.theme()` ;
- tenter d'éliminer la dépendance WindiCSS en exploitant les variables CSS. Ex : `--inset-bg-color: var(--z-inset-border-color, graylight)` (`--z-inset-border-color` est définie dans un fichier de variables séparé et peut être surchargé dans `windi.config.js`)

Encart de contenu avec une zone aligné à droite.

`z-insert`

| Paramètre | Description |
|-----------|-------------|
| `v-center` | Alignement vertical centré |

#### Exemples

Note: `z-inset` expériemente une stylisation à base de variables CSS exclusivement (pa de dépendance direct avec WindiCSS).

<z-inset>
  <p>Simple inset</p>
</z-inset>

~~~
<z-inset>
  <p>Simple inset</p>
</z-inset>
~~~

<z-inset is-center>
  <p>Two part centered inset</p>
  <template #right>
    <p>Part right</p>
  </template>
</z-inset>

~~~
<z-inset is-center>
  <p>Two part centered inset</p>
  <template #right>
    <p>Part right</p>
  </template>
</z-inset>
~~~

<z-inset>
  <h1>Serious information</h1>
  <h2>With subheading</h2>
  <p>Some content here.</p>
  <z-button outline>
    Not CTA button
  </z-button>
  <template #right>
    <z-button is-fullwidth filled>
      Button to the right!
    </z-button>
  </template>
</z-inset>

~~~
<z-layout-blocks>
  <h1>Serious information</h1>
  <h2>With subheading</h2>
  <p>Some content here.</p>
  <z-button is-ouline>
    Not CTA button
  </z-button>
  <template #right>
    <z-button is-fullwidth is-primary>
      Button to the right!
    </z-button>
  </template>
</z-layout-blocks>
~~~

### Viewer 

Visualisateur d'image.

@todo

### Grid

Répartie le contenu sur une grille. Gestion de la dernière ligne de la grille.

@todo :
- gestion intélligente des pair / impair en fonction de la largeur d'affichage ; 
- gestion de la dernière ligne ;
- permettre l'ajout d'une action dans la dernière case (ou dans certaines cases : début, avant / après, etc.);

Exemple d'usage : gallerie d'images

`z-grid`

| Paramètre | Description |
|-----------|-------------|
| `compact` | 
| `variant` | 


## Boutons

<!-- Les usages : https://material.io/components/buttons#usage -->

<!-- Hierachie et positionnement : https://material.io/components/buttons#hierarchy-and-placement -->

### Types
<!-- Stratégie variable : 

variable local : 
 --btn-border-width: var(--z-btn-border-width, --tw-border)
-->
<!-- https://tailwindcss.com/docs/theme -->
<!--  Lister les variables :
 - btn-text-color
 - btn-border-width
 - btn-border-radius
 - btn-border-color
 - btn-padding ?
-->
<!-- Note : utiliser `z-grid` pour répartir et espacer le boutons -->
<!-- Tester aspect calr/foncé au survol en fonction de la couleur du bouton -->
<z-button href="#">Link</z-button>
<z-button text>Text</z-button>
<z-button tonal>Tonal</z-button>
<z-button filled>Filled</z-button>
<z-button outline>Outline</z-button>
<z-button elevated>Elevated</z-button>
<z-button tonal elevated outline>Tonal Outline Elevated</z-button>

<z-inset>
  <z-button href="#">Link</z-button>
  <z-button text>Text</z-button>
  <z-button tonal>Tonal</z-button>
  <z-button filled>Filled</z-button>
  <z-button outline>Outline</z-button>
  <z-button elevated>Elevated</z-button>
  <z-button tonal elevated outline>Tonal Outline Elevated</z-button>
</z-inset>

<z-grid primary>
  <z-button href="#">Link</z-button>
  <z-button text>Text</z-button>
  <z-button tonal>Tonal</z-button>
  <z-button filled>Filled</z-button>
  <z-button outline>Outline</z-button>
  <z-button elevated>Elevated</z-button>
  <z-button tonal elevated outline>Tonal Outline Elevated</z-button>
</z-grid>

### Tailles 
<z-button small>Small</z-button>
<z-button>Normal</z-button>
<z-button large>Large</z-button>
<z-button fullwidth>Fullwidth</z-button>
<z-button small compatc>Small compact</z-button>
<z-button compact>Normal compact</z-button>
<z-button large compact>Large compact</z-button>

### Couleurs
<z-button label>Label</z-button>
<z-button success>Success</z-button>
<z-button danger>Danger</z-button>
<z-button fab>fab</z-button>
<z-button dark>Dark</z-button>
<!-- Comportement clair -->
<!--
Trouver un moyen de configurer les comportemets
clair /sombre de anière globale. Cela permet de 
choisir un thème de couleur clair et de permettre
aux boutons de s'adapté automatiuqment.
 -->
<z-button light>Light</z-button>
<z-button gradient>Gradient</z-button>
<z-button shiny>Shiny</z-button>
<z-button fancy>Fancy</z-button>

### Comportements
<z-button>Enabled</z-button>
<z-button disabled>Disabled</z-button>
<!-- Repos : normal -->
<!-- Survol : clair / fonçé-->
<!-- Actif / pressé: très très clair / très très fonçé-->
<!-- Selectionné / focus : très clair / très fonçé -->
<z-button hover>Hover</z-button>
<z-button focus>Focus</z-button>
<z-button active>Active</z-button>

<!-- Paramètre globaux windi -->
<!-- Ou FAB Fisrt Action Button -->
### Arrondis
<z-button rounded>Rounded</z-button>
<z-button rounded-full>Rounded full</z-button>

### Icônes
<z-button icon="BookOpen" >Icone à gauche (defaut)</z-button>
<z-button icon-right="BookOpen">Icône à droite</z-button>
<z-button icon="BookOpen"/>
<!-- Icône seul -->

### Autres à trier

<!-- Distinguer : action courante, action secondaire et action principale -->
<z-button is-link is-danger>remove</z-button>
<z-button is-outline>Cancel</z-button>
<z-button is-primary>Save</z-button>

<!-- Moins de marges -->
<z-button is-compact>Tertiary action (aka compact)</z-button>


<z-button disabled>Disabled</z-button>

<z-button is-small>Small</z-button>
<z-button >Normal</z-button>
<z-button is-large>large</z-button>

<z-button is-small icon="ExclamationCircle" >Small</z-button>
<z-button icon="ExclamationCircle">Normal</z-button>
<z-button is-large icon="ExclamationCircle">large</z-button>

<z-button is-link>Un bouton qui ressemble à un lien</z-button>

<z-button is-light>Pour une action lumineuse</z-button>

<z-button is-dark>Un bouton sombre</z-button>

<z-button is-primary>Bouton primaire</z-button>

<z-button is-caps>Capitalize</z-button>

<z-button icon="Heart">With icon</z-button>

<z-button icon="Search" is-small />
<z-button icon="Mail" is-primary is-small />
<z-button icon="Search"/>
<z-button icon="Mail" is-primary />
<z-button icon="Search" is-large/>
<z-button icon="Mail" is-primary is-large />

<z-button is-success>Succes style</z-button>
<z-button is-danger>Danger style</z-button>

<z-button is-success icon="CheckCircle">Succes style</z-button>
<z-button is-success icon="EmojiHappy">Succes style</z-button>
<z-button is-danger icon="ExclamationCircle">Danger style</z-button>
<z-button is-danger icon="EmojiSad">Danger style</z-button>
<z-button is-warning icon="Exclamation">Warning style</z-button>
<z-button is-info icon="InformationCircle">Infos style</z-button>
<z-button is-info icon="LightBulb">Infos style</z-button>
<z-button is-info icon="Newspaper">Infos style</z-button>
<z-button is-info icon="DocumentText">Infos style</z-button>
<z-button is-info icon="ClipboardList">Infos style</z-button>
<z-button is-info icon="Chat">Infos style</z-button>
<z-button is-info icon="ChatAlt2">Infos style</z-button>
<z-button is-info icon="BookOpen">Infos style</z-button>
<z-button is-info icon="Annotation">Infos style</z-button>

<z-button is-caps is-primary is-small icon="BadgeCheck">Full caps small button with icon</z-button>

<z-button is-caps is-primary icon="BadgeCheck">Full caps button with icon</z-button>

<z-button is-caps is-primary is-large icon="BadgeCheck">Large fullcaps button with icon</z-button>

<z-button is-caps is-shiny is-large icon="Fire">Shiny button !</z-button>

<z-button is-caps is-gradient is-large icon="EmojiHappy">Gradient button</z-button>

<z-button is-caps is-fancy is-large icon="ChatAlt2">Ultra fancy button</z-button>

[Boutons plus clair lors du survol](https://www.dosomething.org/us)

## Badges

[Badge with icon](https://seeds.sproutsocial.com/components/badge).

## Images

[Image out of the box](https://s10wen.com/styleguide/#image-large)
[Direction artistique](https://backpack.github.io/guidelines/photography) (noter les bords extérieur arrondie sur les grilles)

## Pagination

- Pagination textuelle (article suivant/précedent)
- [Buttons fo pagination](https://s10wen.com/styleguide/#pagination)

<z-pagination :links="{
      before: {
        name: 'Article précedent',
        to: '#'
      },
      after: {
        name: 'Article suivant',
        to: '#'
      }
    }"/>

~~~
<z-pagination
  :links="{
    before: {
      name: 'Article précedent',
      to: '#'
    },
    after: {
      name: 'Article suivant',
      to: '#'
    }
  }"
/>
~~~

## Typographies

- [Titrages leger](https://design.firefox.com/photon/visuals/typography.html)
- [Typo et couleur](https://www.fiftythree.com/styleguide/typography)
- [Typo grausse & espacement](https://backpack.github.io/guidelines/typography)
## Illustrations
[Pour certaines pages système](https://design.firefox.com/photon/visuals/illustration.html)


## Tokens

[Nommage des tokens](https://backpack.github.io/tokens/animation)
