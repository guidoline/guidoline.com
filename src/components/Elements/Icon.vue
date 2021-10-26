<template>
  <component
    :is="currentIcon"
    v-bind="iconProps"
    class="icon"
  />
</template>

<script>
/**
 * Utilitaire pour afficher des icône SVG.
 *
 * Liste des icones : https://vue-feather-icons.egoist.sh/
 */

import { PhoneIcon, MailIcon, CalendarIcon } from 'vue-feather-icons'
export default {
  name: 'Icon',
  components: {
    PhoneIcon,
    MailIcon,
    CalendarIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1.3x'
    }
  },
  computed: {
    currentIcon () {
      return `${this.name.replace(/-./g, (x) => x.toUpperCase()[1]).replace(/\b\w/g, (c) => c.toUpperCase())}Icon`
    },
    iconProps () {
      return { size: this.size }
    }
  }
}
</script>
<style>
.icon {
  display: inline;
  padding: 0 var(--gap-quarter);
  vertical-align: text-top;
}
</style>
