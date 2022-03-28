---
title: Guide de Style
links:
  - name: 'Typographie'
    to: '/styleguide/typographie'
  - name: 'Composants'
    to: '/styleguide/components'
---

[Guide de style](/styleguide)

<z-menu :links="frontmatter.links" />

# Guide de style

### Table des matières
[[TOC]]

## Titrages
Hiérarchiser les niveaux d'informations du contenu.

# Titre de niveau 1
~~~.html
# Titre de niveau 1
~~~

## Titre de niveau 2
~~~.html
## Titre de niveau 2
~~~

### Titre de niveau 3
~~~.html
### Titre de niveau 3
~~~

#### Titre de niveau 4
~~~.html
#### Titre de niveau 4
~~~

##### Titre de niveau 5
~~~.html
###### Titre de niveau 5
~~~

###### Titre de niveau 6
~~~.html
###### Titre de niveau 6
~~~

## Marquer du texte

Enrichir le texte en ajoutant des marqueurs.

### Emphases

*Emphase simple*
~~~
*Emphase simple*
~~~

**Emphase forte**
~~~
**Emphase forte**
~~~

***Emphase très forte***
~~~
***Emphase très forte***
~~~

### Supprimer / insérer

~~Supprimer du texte~~
~~~
~~Supprimer du texte~~
~~~

++Insérer du texte++
~~~
++Insérer du texte++
~~~

### Citations

> L'essentiel est invisible pour les yeux.
>
> [Le Petit Prince](https://fr.wikipedia.org/wiki/Le_Petit_Prince) , 1943, Antoine de Saint-Exupéry

~~~
> L'essentiel est invisible pour les yeux.
>
> [Le Petit Prince](https://fr.wikipedia.org/wiki/Le_Petit_Prince) , 1943, Antoine de Saint-Exupéry
~~~


### Afficher du code

~~~
print("Hello")
~~~

    ~~~
    print("Hello")
    ~~~

Pour sauvegarder faite le raccourci `ctrl + s`
~~~
Pour sauvegarder faite le raccourci `ctrl + s`
~~~~

### Autres marqueurs

*[HTML]: Hyper Text Markup Language
~~~
*[HTML]: Hyper Text Markup Language
~~~


~~~
<abbr title="Détail de l'abbréviation"></abbr>
<dfn></dfn> (terme qui est défini dans le paragraphe)
<sup></sup>
<sub></sub>
~~~


## Hyperliens

Hyperlien.

[exemple de lien](https://example.com)
~~~
[exemple de lien](https://example.com)
~~~

Ancre.

[exemple d'ancre](#nom-de-la-cible)
~~~
[exemple d'ancre](#nom-de-la-cible)
~~~

Hyperlien simple.

<https://fr.wikipedia.org/wiki/Markdown>
~~~
<https://fr.wikipedia.org/wiki/Markdown>
~~~

Lien email.

<ziopod@gmail.com>
~~~
<ziopod@gmail.com>
~~~

Hyperlien référencé.

[Site d'exemple][1]
[1]: https://example.com

~~~
[Site d'exemple][1]
[1]: https://example.com
~~~

Note de bas de page[^1]

[^1]: Ceci est une note de bas de page.

~~~
Note de bas de page [^1]

[^1]: Ceci est une note de bas de page.
~~~



## Médias

![Image d'exemple en 150 × 150](https://via.placeholder.com/150)
~~~
![Image d'exemple en 150 × 150](https://via.placeholder.com/150)
~~~



## Listes

Liste non-ordonnée.

- Farine de blè : 500g.
- Sel fin : 10 pincées
- Eau : 32 cl.
- Levure de boulangerie : 8g.

~~~
- Farine de blè : 500g.
- Sel fin : 10 pincées
- Eau : 32 cl.
- Levure de boulangerie : 8g.
~~~

Liste ordonnée.

1. Mélanger la farine le sel, la levure et l'eau
2. Pétrir pendant 20 min.
3. Laisser reposer 4 heures
4. Cuire à 240° pendant 15 minutes

~~~
1. Mélanger la farine le sel, la levure et l'eau
2. Pétrir pendant 20 min.
3. Laisser reposer 4 heures
4. Cuire à 240° pendant 15 minutes
~~~

Liste de définition.

Pain
: Aliment fait de farine pétrie et cuite.

~~~
Pain
: Aliment fait de farine pétrie et cuite.
~~~

Liste de tâches.

1. [x] Acheter les ingrédients
2. [ ] Pétrir la pâte
3. [ ] Cuire le pain

~~~
1. [x] Acheter les ingrédients
2. [ ] Prétir la pâte
3. [ ] Cuire le pain
~~~

## Tableau

| Ingrédient    | qté        |
|---------------|------------|
| Farine de blè | 500g.      |
| Sel fin       | 10 pincées |
| Eau           | 32 cl.     |
| Levure        | 8g.        |

~~~
| Ingrédient    | qté        |
|---------------|------------|
| Farine de blè | 500g.      |
| Sel fin       | 10 pincées |
| Eau           | 32 cl.     |
| Levure        | 8g.        |
~~~

## Divers

Ligne de séparation.

---
~~~
---
~~~
