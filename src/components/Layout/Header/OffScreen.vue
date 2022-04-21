<script setup>
import Logo from '~/assets/logo-guidoline-small.svg?inline'
import { main as mainMenu } from '@/content/settings/navigation.json'
import Item from '~/components/Layout/Navigation/Item.vue'
import Wrapper from '~/components/Layout/Navigation/Wrapper.vue'
import { watch } from 'vue'

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

</script>
<style scoped>
.nav-off-screen {
  /* @apply flex flex-col flex-1 p-4 */
  margin-top: -100vh;
  @apply pb-12 h-screen w-screen -mt-screen bg-callout-background text-callout-text transition-margin duration-500 ease-out overflow-hidden;
  /* Élements alignés en haut */
  @apply items-start;
}
.nav-off-screen:target,
.nav-off-screen.is-show { @apply <sm:mt-0; }
.logo { @apply h-auto m-4 w-16 text-day-text hover:(text-day-loud); }
</style>

<template>
  <Wrapper
    id="off-screen-navigation"
    class="nav-off-screen"
    :class="menuOpen ? 'is-show' : ''"
  >
    <Item class="flex flex-col items-center">
      <router-link
        to="/"
        title="Retour sur la page d'accueil"
      >
        <slot>
          <Logo class="logo" />
          <h1 class="sr-only">Default title</h1>
        </slot>
      </router-link>
      <!--
        @note: Double évenements ici (menu et bouton cliqué), voir si
        il n'y a pas une solution plus élégante.
      -->
      <z-menu
        :links="mainMenu"
        is-vertical
        is-center
        @click="$emit('update:menuOpen', false)"
      />
    </Item>
    <template #right>
      <Item>
        <z-button
          @click.prevent="$emit('update:menuOpen', false)"
          href="#!"
          type="light"
          icon="X"
        />
      </Item>
    </template>
  </Wrapper>
</template>
