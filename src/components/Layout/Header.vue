<template>
  <HeaderOffScreen
    v-model:menu-open="menuOpen"
  />
  <NavWrapper class="nav-sup is-compact">
    <template #left>
      <NavItem>
        <z-button
          icon="Mail"
          class="light text"
          :href="`mailto:${contacts.main.email}`"
        >
          {{ contacts.main.email }}
        </z-button>
      </NavItem>
    </template>
    <template #right>
      <NavItem>
        <z-button
          icon="Phone"
          class="light text"
          :href="`tel:${contacts.main.phone}`"
        >
          {{ contacts.main.phone}}
        </z-button>
      </NavItem>
    </template>
  </NavWrapper>
  <div class="nav-sup">
    <div class="nav-item">
    </div>
    <div class="nav-item">

    </div>
  </div>
  <header>
    <NavWrapper>
      <template #left>
        <NavItem>
          <router-link
            to="/"
            title="Retour sur la page d'accueil"
          >
            <slot>
              <Logo class="logo" />
              <h1 class="sr-only">{{ siteName }}</h1>
            </slot>
          </router-link>
        </NavItem>
        <NavItem>
          <div class="nav-menu-burger">
            <z-menu
              class="<md:hidden"
              :links="mainMenu"
              type="light"
              linkClasses="text"
            />
          </div>
        </NavItem>
      </template>
      <template #right>
        <NavItem class="nav-burger">
          <ZNavigationBurgerButton
            v-model:menu-open="menuOpen"
            fallback-target="#off-screen-navigation"
          />
        </NavItem>
        <NavItem class="<sm:hidden">
          <Socials
            class="nav-menu-burger nav-item is-compact"
            :is-responsive="false"
          />
        </NavItem>

      </template>
    </NavWrapper>
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
import Socials from '~/components/Layout/Navigation/Socials.vue'
import NavWrapper from '~/components/Layout/Navigation/Wrapper.vue'
import NavItem from '~/components/Layout/Navigation/Item.vue'
import { main as mainMenu, socials as _socialLinks } from '@/content/settings/navigation.json'
import { contacts, name as siteName } from '@/content/settings/global.json'
import { ref } from 'vue'
const menuOpen = ref(true)
menuOpen.value = false
</script>
<style scoped>
/** @todo: construire un header standard (sobre et simple) :
 * - sous-tête (breadcrumb, sous-menu) [plus tard] ;
 * - champ de recherche [plus tard];
 * - bouton logo 2 états en fonction de la place dispo (sr-only, not-sr-only)
 * - prévoir un peu de souplesse (logo au centre, etc.).
 */

.nav-sup { @apply text-sm bg-night-background text-night-text; }
header { @apply bg-callout-background text-callout-text; }
.nav-burger { @apply sm:hidden justify-right pl-0; }
.logo { @apply w-8 text-day-text hover:(text-day-text-dark); }
.wrapper.is-compact .item { @apply sm:(py-2 pl-2 last:pr-4); }
/* .nav-sub { @apply bg-gray-600; } */
/* .nav-item { @apply py-2 pl-2 last:pr-2 sm:(py-4 pl-4 last:pr-4); }
.nav-center { @apply justify-center; }
.nav-left { @apply justify-left; }
.nav-right { @apply justify-right ml-auto; } */

</style>
