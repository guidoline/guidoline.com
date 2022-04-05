<template>
  <HeaderOffScreen
    v-model:menu-open="menuOpen"
  />
  <div class="nav-sup">
    <div class="nav-item">
      <z-button
        icon="Mail"
        class="light text"
        :href="`mailto:${contacts.main.email}`"
      >
        {{ contacts.main.email }}
      </z-button>
    </div>
    <div class="nav-item">
      <z-button
        icon="Phone"
        class="light text"
        :href="`tel:${contacts.main.phone}`"
      >
        {{ contacts.main.phone}}
      </z-button>
    </div>
  </div>
  <!-- https://freefrontend.com/css-fullscreen-menus/ -->
  <!-- https://freefrontend.com/css-mobile-menus/ -->
  <!-- @todo: Menu mobile, pistes : -->
  <!-- - basculer entre deux composant de menu ? -->
  <!-- Se concentré su le mobile en premier -->
  <!-- Soigner le positionnement des éléments (grid ?)
       - commencer très simple (liste pmv), complexifier + tard
       - Une séparation verticale de chaque groupe
       - zone CTA (coloré + visuel) sous mobile
       - fullscreen non bloquant (push to bottom)
       - compactifier (replier) sous mobile
       - trigger en bas (gauche ou droite) + sociaux ?
       - masquer certains élements sous très petit mobile
       - focus, accessibilté
       - tester un offscreen top (le menu pousse tout le contenu vers le bas)
         burger bouton y compris (aspect actif: opacity .5)
  -->
  <!-- push to bottom -->
  <!-- remarque: le menu horizontal, doit pouvoir basculer
  automatiquement en vertical sous md (sauf si forcé) -->
  <header class="nav">
    <div class="nav-left">
      <router-link
        to="/"
        class="nav-item"
        title="Retour sur la page d'accueil"
      >
        <slot>
          <Logo class="logo" />
          <h1 class="sr-only">{{ siteName }}</h1>
        </slot>
      </router-link>
      <div class="nav-menu-burger nav-item">
        <z-menu
          class="<md:hidden"
          :links="mainMenu"
          type="light"
          linkClasses="text"
        />
      </div>
    </div>
    <div class="nav-right justify-right">
      <z-menu
        v-if="importantMenu.length"
        :links="importantMenu"
        class="nav-menu nav-item"
      />
      <ZSearch />
      <z-menu
        :links="secondaryMenu"
        class="nav-menu-burger nav-item"
        :is-responsive="false"
      />
    </div>
    <div class="nav-burger nav-item">
      <!-- v-model sur menuOpen ? -->
      <ZNavigationBurgerButton
        v-model:menu-open="menuOpen"
        fallback-target="#off-screen-navigation"
      />
    </div>
  </header>
</template>
<script setup>
import HeaderOffScreen from '~/components/Layout/Header/OffScreen.vue'
import Logo from '~/assets/logo-guidoline-small.svg?inline'
import { main as mainMenu } from '@/content/settings/navigation.json'
import { contacts, name as siteName } from '@/content/settings/global.json'
import { ref } from 'vue'
const menuOpen = ref(true)
menuOpen.value = false
// Fermer le menu après la navigation
const importantMenu = [
  // {
  //   name: 'Rechercher',
  //   title: 'Chercher sur le site',
  //   icon: 'Search',
  //   sr: true
  // }
]
const secondaryMenu = [
  {
    name: 'F',
    title: 'Consultez nos publication Facebook',
    href: 'https://example.com',
    // icon: 'Facebook'
  },
  {
    name: 'T',
    title: 'Contacter via Twitter',
    href: 'https://example.com',
    // icon: 'AtSymbol',
    // sr: true
  },
  {
    name: 'Écrivez-nous',
    href: 'mailto:hello@example.com',
    icon: 'Mail',
    sr: true
  }
]
</script>
<style scoped>
/** @todo: construire un header standard (sobre et simple) :
 * - burger ;
 * - sur-tête (infos de contact rapide) ;
 * - sous-tête (breadcrumb, sous-menu) [plus tard] ;
 * - navigation complémenaire (réseaux sociaux, compte utlisateur) ;
 * - champ de recherche ;
 * - bouton logo 2 états en foncion de la place dispo (sr-only, not-sr-only)
 * - prévoir un peu de souplesse (logo au centre, etc.).
 */
 /* .nav h1 { @apply inline } */
.nav,
.nav-sup,
.nav-center,
.nav-left,
.nav-right {
  @apply flex flex-wrap justify-between items-center;
}
/* .nav.is-open,
.nav.is-open .nav-sup,
.nav.is-open .nav-center,
.nav.is-open .nav-left,
.nav.is-open .nav-right {
   @apply <md:(flex-col justify-center ml-0)
}
.nav.is-open { @apply <md:(relative) }
.nav.is-open .nav-burger {
  @apply <md:(absolute top-0 right-0)
}*/
.nav-sup { @apply text-sm bg-night-background text-night-text; }
.nav { @apply bg-callout-background text-callout-text; }
.nav-sub { @apply bg-gray-600; }
/* .nav-item,
.nav-left,
.nav-center,
.nav-right { @apply p-4 } */
.nav-item { @apply py-2 pl-2 last:pr-2 sm:(py-4 pl-4 last:pr-4); }
.nav-center { @apply justify-center; }
.nav-left { @apply justify-left; }
.nav-right { @apply justify-right ml-auto; }

/* .nav.is-compact { @apply text-sm} */
/* .nav.nav-sup { @apply bg-primary-700 text-primary-100 }
.nav { @apply bg-primary-500 }
.nav.nav-sub { @apply bg-primary-100 text-primary-700 } */

/* Burger: visible mobile */
.nav-burger { @apply sm:hidden justify-right pl-0; }
/* Menu: Visible desktop */
/* .nav-menu-burger:not(.is-open) { @apply <md:hidden md:flex } */

.logo {
  /* Idéalement w-18 sans forcer la hauteur du parent */
  @apply w-8;
}
</style>
