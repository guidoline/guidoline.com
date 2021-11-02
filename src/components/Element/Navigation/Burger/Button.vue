<template>
  <z-button
    v-if="!menuOpen"
    @click.prevent="setMenuOpen(true)"
    href="#off-screen-navigation"
    type="light"
    icon="Menu"
  />
  <z-button
    v-else
    @click.prevent="setMenuOpen(false)"
    href="#"
    type="light"
    icon="X"
  />
</template>
<script setup>
defineProps({
  menuOpen: {
    type: Boolean,
    required: true
  },
  fallBackTarget: {
    type: String,
    default: '#navigation'
  }
})
const emit = defineEmits(['update:menuOpen'])
const setMenuOpen = (state) => { emit('update:menuOpen', state) }

</script>
