<template>
  <a :href="computedEmail">{{ toName }}</a>
</template>

<script>
/**
 * Permet de générer un lien email cliquable.
 */
export default {
  props: {
    /**
     * Le texte à afficher
     */
    toName: { type: String },
    /**
     * L'adresse email à compiler
     * @values Une adresse email
     */
    toEmail: { type: String }
  },
  /**
   * Compile l'adresse email en adresse email cliquable.
   */
  computed: {
    computedEmail() {
      return 'mailto: ' + this.toEmail;
    }
  }
}
</script>
