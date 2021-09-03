<template>
  <component :is="currentIcon" />
</template>

<script>
/**
 * Utilitaire pour afficher des icône SVG.
 */

import Example from '@/assets/icons/example.svg'

export default {
  name: 'Icon',
  components: {
    Example
  },
  props: {
    // Le nom de l'icône
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    /**
     * Retourne le nom du fichier à charger
     * @type String
     */
    currentIcon () {
      return this.name
    }
  }
}
</script>
