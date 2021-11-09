<template>
  <section class="grid">
    <slot />
  </section>
</template>
<style scoped>
/* https://gridbyexample.com/examples/ */
/* Objectifs:
Permettre de placer simplement des éléments sur une grille.
Cette grille peut être stylisée (ex. bords exterieurs arrondis)
Usage : gallery d'images, ligne de boutons
Propriétés :
 - nombre de colonnes (default : 3)
 - style (arrondis, couleurs, etc.)
 @todo: attedre d'avoir des cas d'usage concret avant d'aller plus loin.
 */
.grid {
  /*  Grille automatique */
  display: grid;
  /* Répartition auto sur une ligne */
  grid-auto-flow: column;
  justify-content: space-between;
/* grid-template-columns: repeat(auto, 1fr); */
 /* grid-template-rows: repeat(auto, 150px); */
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  /* grid-auto-columns: auto;
  grid-auto-columns: minmax(10px, auto);
  grid-auto-columns: min-content;
  grid-auto-columns: max-content;
  grid-auto-columns: 25%;
  grid-auto-columns: 1fr; */
  /* grid-auto-flow: column; */
  /* grid-auto-flow: row; */
  /* justify-item: stretch; */
  /* @apply flex space-between items-center; */
  }
.grid.multiline {
  grid-gap: 1rem;
  /* grid-template-rows: repeat(auto-fill, 120px); */
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr) ) ; */
  grid-template-columns: repeat(auto-fill, minmax(30% , 1fr) ) ;
  grid-auto-flow: dense;
}

</style>
