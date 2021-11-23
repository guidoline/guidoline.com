<template>
  <nav
    id="off-screen-navigation"
    class="nav-off-screen"
    :class="menuOpen ? 'is-show' : ''"
  >
    <z-button
      @click.prevent="$emit('update:menuOpen', false)"
      href="#!"
      type="light"
      icon="X"
    />
    <router-link
      to="/"
      class="nav-item"
      title="Retour sur la page d'accueil"
    >
      <slot>
        <Logo class="logo" />
        <h1 class="sr-only">Default title</h1>
      </slot>
    </router-link>
    <div class="nav-menu-burger nav-item">
      <!--
        @note: Double évenements ici (menu et bouton cliqué), voir si
        il n'y a pas une solution plus élégante.
      -->
      <z-menu
        :links="mainMenu"
        type="light"
        @click="$emit('update:menuOpen', false)"
      />
      <ZSearch />
    </div>
  </nav>
</template>
<script setup>
import Logo from '~/assets/logo.svg?inline'
import { main as mainMenu } from '@/content/settings/navigation.json'
import { watch } from 'vue'
// import { useRoute } from 'vue-router'

const props = defineProps({
  menuOpen : {
    type: Boolean,
    required: true
  },
  show: {
    type: Boolean,
    default: false
  }
})
// Observateur : remonter la valeur transmise par le bouton
const emit = defineEmits(['update:menuOpen'])
watch(() => props.menuOpen, (state) => emit('update:menuOpen', state))
// Évite d'utiliser un écouteur sur les évenements ddes liens, néanmoins,
// une route courante clicquée ne referme pas le menu.
// watch(useRoute(), (route) => emit('update:menuOpen', false))

</script>
<style scoped>
.nav-off-screen {
  /* @apply flex flex-col flex-1 p-4 */
  margin-top: -100vh;
  @apply  px-4 pb-12 h-screen w-screen -mt-screen bg-white transition-margin duration-500 ease-out overflow-hidden;
}
.nav-off-screen:target,
.nav-off-screen.is-show {
  @apply <sm:mt-0;
}
.logo {
  /* Idéalement w-18 sans forcer la hauteur du parent */
  @apply w-12;
}
</style>
