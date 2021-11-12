---
title: Grille
---

# Grille


<style>
.z-grid div { outline: 1px dashed hotPink; text-align: center; }
</style>

<z-grid class="is-twelve">
  <div class="col-span-full">1/1</div>
  <div class="col-span-five-sixths">5/6</div><div class="col-span-sixth">1/6</div>
  <div class="col-span-three-quarters">3/4</div><div class="col-span-quarter">1/4</div>
  <div class="col-span-two-thirds">2/3</div><div class="col-span-third">1/3</div>
  <div class="col-span-demi">1/2</div><div class="col-span-demi">1/2</div>
</z-grid>

~~~
<style>
.z-grid div { outline: 1px dashed hotPink; text-align: center; }
</style>

<z-grid>
  <z-grid-item>1/1</z-grid-item>
  
  <z-grid-item five-sixths>5/6</z-grid-item>
  <z-grid-item sixth>1/6</z-grid-item>

</z-grid>
~~~

<z-grid class="is-twelve">
  <div class="col-span-sixth">1/6 left</div>
  <div class="col-span-sixth col-center">1/6 center</div>
  <div class="col-span-sixth col-right">1/6 right</div>
  <div class="col-span-quarter">1/4</div>
  <div class="col-span-quarter col-center">1/4 center*</div>
  <div class="col-span-quarter col-right">1/4 right</div>
  <div class="col-span-third">1/3</div>
  <div class="col-span-third col-center">1/3 center</div>
  <div class="col-span-third col-right">1/3 right</div>
  <div class="col-span-demi">1/2</div>
  <div class="col-span-demi col-center">1/2 center</div>
  <div class="col-span-demi col-right">1/2 right</div>
  <div class="col-span-two-thirds">2/3</div>
  <div class="col-span-two-thirds col-center">2/3 center</div>
  <div class="col-span-two-thirds col-right">2/3 right</div>
  <div class="col-span-three-quarters">3/4</div>
  <div class="col-span-three-quarters col-center">3/4 center*</div>
  <div class="col-span-three-quarters col-right">3/4 right</div>
  <div class="col-span-five-sixths">5/6</div>
  <div class="col-span-five-sixths col-center">5/6 center</div>
  <div class="col-span-five-sixths col-right">5/6 right</div>
</z-grid>

<small>* ces cellules sont ajustées car non-divisibles.</small>

~~~
<z-grid>
  <z-grid-item start-sixth>Start 1/6</z-grid-item>

  <z-grid-item sixth>1/6 left</z-grid-item>
  <z-grid-item sixth center>1/6 center</z-grid-item>
  <z-grid-item sixth right>1/6 righ</z-grid-item>
</z-grid>
~~~


*KISS**

 - container
 - sizing

## Sizing


| Colonnes | minor | normal | major | full |
|-|-|-|-|-|
| 2 | 1/2 | 1 | 1 | 1 |
| 3 | 1/3 | 1 | 1 | 1 |
| 4 | 1/4 | 1/2 | 1 | 1 |
| 6 | 1/6 | 1/3 | 1/2 | 1 |
| 8 | 1/8 | 1/4 | 1/2 | 1 |
| 12 | 1/6 | 1/4 | 1/2 | 1 |


## Marquage basique

Grille 2 colonnes

| | |
|-|-|
| minor | minor |
| normal |
| major |
| full |


Grille 3 colonnes 

*Voir la gestion de 1/2 colonne en grid layout (6 cols en fake 3)*

| | | |
|-|-|-|
| minor | minor | minor |
| normal | | normal |
| major |
| full |

Grille 4 colonnes 

| | | | |
|-|-|-|-|
| minor | minor | minor | minor |
| normal | | normal | |
| major | | |  |
| full |

Grille 6 colonnes 

| | | | | | |
|-|-|-|-|-|-|
| minor | minor | minor | minor | minor | minor |
| normal | | normal | | normal | | 
| major | | | major | | |
| full |

Grille 8 colonnes 

| | | | | | | | |
|-|-|-|-|-|-|-|-|
| minor | minor | minor | minor | minor | minor | minor | minor |
| normal | | normal | | normal | | normal | |
| major | | | | major | | | |
| full |

Grille 12 colonnes 

| | | | | | | | | | | | | 
|-|-|-|-|-|-|-|-|-|-|-|-|
| minor | . | minor | . | minor | . | minor | . | minor | . | minor | . |
| normal | . | . | normal | . | . | normal | . | . |  normal | . | . |
| major | . | . | . | major | . | . | . |  major | . | . | . |
| full |
