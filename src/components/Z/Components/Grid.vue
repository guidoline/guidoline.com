<template>
  <div class="z-grid">
    <slot />
  </div>
</template>
<style scoped>
/*
Breakpoint natifs:
- None	width: 100%;
- sm (640px)	max-width: 640px;
- md (768px)	max-width: 768px;
- lg (1024px)	max-width: 1024px;
- xl (1280px)	max-width: 1280px;
- 2xl (1536px)	max-width: 1536px;
*/

  /* grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px); */

/* /Volumes/Big Mama/Sites/ecriturdom/assets/css/layouts/columns.css */
.cols > div,
.columns > div { @apply bg-red-200 p-4; }
/* Gouttières 16px > 24px  */
.z-grid {
  /* @apply bg-red-100;  */
  @apply grid gap-4 justify-between;
}
/*
@todo : revisoter de façon pragnatique :
- usage : Abstrati d'article : mono colonne sur mobile, 3 colonnes (1/3 image, 2/3 texte), espace texte 38 signes minimum, 60 signes maximum.
- dit être piloté par le container (sorte de polyfill de @media container) :
  - 2 cols, 3 cols, 6 cols, 8 cols
- doit inclure un container full layout responsive
  - usage : header, footer, main container
- doit être basé sur un modulo 22ch
- grid auto doit permettre de définir de colonnes mineures et majeures
 */

/* Grille auto */
/* Le nombre de colonne est déterminée par le nombre d'enfants */
.z-grid {
  /* grid-template-columns: repeat(auto-fit, minmax(28ch, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(22ch, 1fr));
  grid-template-rows: repeat(auto-fit, min-content);
}

/* Varaintes pour la grille auto */
.z-grid:deep(.col-minor) { @apply grid-span-1; /* /!\ valeur par défaut */ }
.z-grid:deep(.col-major) {
    grid-column: span 2 / span 2;
    /* @apply grid-span-2;  */
}

/* Grille explicite */
.is-container {
  @apply w-auto
  mx-4
  md:(w-screen-sm mx-auto gap-6)
  lg:(w-screen-lg)
  xl:(w-screen-lg)
  2xl:(w-screen-xl);
}

.is-twelve { @apply grid-cols-12; }
/* <grid-item span-demi > Example </grid-item> */
/* .z-grid:deep(.grid-item), */
/* .z-grid:deep([class^=col-]), */
.z-grid:deep(.col-span-full) { @apply col-span-full; }
.z-grid:deep(.col-span-five-sixths) { @apply col-span-10; }
.z-grid:deep(.col-span-three-quarters) { @apply col-span-9; }
.z-grid:deep(.col-span-two-thirds) { @apply col-span-8; }
.z-grid:deep(.col-span-demi) { @apply col-span-6; }
.z-grid:deep(.col-span-third) { @apply col-span-4; }
.z-grid:deep(.col-span-quarter) { @apply col-span-3; }
.z-grid:deep(.col-span-sixth) { @apply col-span-2; }

/* start / end */
/* @note: ce n'est pas prioritaire, préférez mettre en œuvre l'alignement (plus utile). */
.z-grid:deep(.col-start-sixth) { @apply col-start-3; }
.z-grid:deep(.col-start-quarter) { @apply col-start-4; }
.z-grid:deep(.col-start-third) { @apply col-start-5; }
.z-grid:deep(.col-start-demi) { @apply col-start-7; }
.z-grid:deep(.col-start-two-thirds) { @apply col-start-9; }
.z-grid:deep(.col-start-three-quarters) { @apply col-start-10; }
.z-grid:deep(.col-start-five-sixths) { @apply col-start-11; }

/* Alignement */
/* @todo: faire la même chose pour toutes les largeurs */
/* @todo: tenter d'aligner des élement implicitement, par ex.
   deux boutons « avant / après » alignés à gauche et à droite.
   Teset d'autre cas de figure, par ex. deux 1/2 avec texte aligné à gauche et
   text aligné à droite.
   Prévir également le comportement responsive.
 */
.z-grid:deep(.col-span-five-sixths.col-center) { @apply col-start-2; }
.z-grid:deep(.col-span-five-sixths.col-right) { @apply col-start-3; }
.z-grid:deep(.col-span-three-quarters.col-center) { @apply col-start-2 col-span-10; }
.z-grid:deep(.col-span-three-quarters.col-right) { @apply col-start-4; }
.z-grid:deep(.col-span-two-thirds.col-center) { @apply col-start-3; }
.z-grid:deep(.col-span-two-thirds.col-right) { @apply col-start-5; }
.z-grid:deep(.col-span-demi.col-center) { @apply col-start-4; }
.z-grid:deep(.col-span-demi.col-right) { @apply col-start-7; }
.z-grid:deep(.col-span-third.col-center) { @apply col-start-5; }
.z-grid:deep(.col-span-third.col-right) { @apply col-start-9; }
.z-grid:deep(.col-span-quarter.col-center) { @apply col-start-5 col-span-4; }
.z-grid:deep(.col-span-quarter.col-right) { @apply col-start-10; }
.z-grid:deep(.col-span-sixth.col-center) { @apply col-start-6; }
.z-grid:deep(.col-span-sixth.col-right) { @apply col-start-11; }


</style>
