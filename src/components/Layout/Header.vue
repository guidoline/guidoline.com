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
        class="nav-menu-burger nav-item is-compact"
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
/**
 * Inspiration pour le menu de navigation :
 * - https://freefrontend.com/css-mobile-menus/
 * - https://freefrontend.com/css-fullscreen-menus/
 */
import HeaderOffScreen from '~/components/Layout/Header/OffScreen.vue'
import Logo from '~/assets/logo-guidoline-small.svg?inline'
import IconFacebook from '~/assets/icons/facebook.svg?inline'
import IconTwitter from '~/assets/icons/twitter.svg?inline'
import IconInstagram from '~/assets/icons/instagram.svg?inline'
import { main as mainMenu } from '@/content/settings/navigation.json'
import { contacts, name as siteName } from '@/content/settings/global.json'
import { ref } from 'vue'
const menuOpen = ref(true)
menuOpen.value = false
const importantMenu = [
  // Pas utilisé sur ce thème
]
// @todo récupérer les liens depuis le fichier de configuration
const secondaryMenu = [
  {
    name: 'Facebook',
    title: 'Consultez nos publication Facebook',
    href: 'https://example.com',
    icon: IconFacebook,
    sr: true,
    class: 'secondary elevated'
  },
  {
    name: 'Twitter',
    title: 'Contacter via Twitter',
    href: 'https://example.com',
    icon: IconTwitter,
    sr: true
  },
  {
    name: 'Instagram',
    title: 'Nos photos sur instagram',
    href: 'https://example.com',
    icon: IconInstagram,
    sr: true
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
 * - sous-tête (breadcrumb, sous-menu) [plus tard] ;
 * - champ de recherche [plus tard];
 * - bouton logo 2 états en fonction de la place dispo (sr-only, not-sr-only)
 * - prévoir un peu de souplesse (logo au centre, etc.).
 */
.nav,
.nav-sup,
.nav-center,
.nav-left,
.nav-right {
  @apply flex flex-wrap justify-between items-center;
}
.nav-sup { @apply text-sm bg-night-background text-night-text; }
.nav { @apply bg-callout-background text-callout-text; }
.nav-sub { @apply bg-gray-600; }
.nav-item { @apply py-2 pl-2 last:pr-2 sm:(py-4 pl-4 last:pr-4); }
.nav-center { @apply justify-center; }
.nav-left { @apply justify-left; }
.nav-right { @apply justify-right ml-auto; }

/* Burger: visible mobile */
.nav-burger { @apply sm:hidden justify-right pl-0; }

.logo { @apply w-8 text-day-text hover:(text-day-text-dark); }
</style>
