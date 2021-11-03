<template>
  <LayoutDefault>
    <pre>pages/Index.vue</pre>
    <Home />
  </LayoutDefault>
</template>
<script setup>
/**
 * Fonctionnement des routes/layouts :
 *  - Le layout est specifié par la route ;
 *  - Le composant `layouts/MdWrapper.vue` doit supporter des templates ;
 *  - Normal : app > layout > composant (pas de contexte MD)
 *  - MD : app > layout > composant MD > wapper (contexte MD dans wrapper)
 *  - MD importé : app > layout > composant > composant MD > wrapper (idem)
 *  - le contexte MD est accéssible :
 *    - dans le wrapper
 *    - via la configuration de `vite-plugin-md:extendRoutes()`
 *
 * Exemples de Layouts :
 *  - default : header, slot, footer
 *  - simple :  mini-header, slot
 *  - empty : slot
 *
 * Exemple de templates :
 *  - layouts/Templates/Page/Home.vue
 *  - layouts/Templates/Page/Cover.vue
 *  - layouts/Templates/Page/Section.vue
 *  - layouts/Templates/Page/Default.vue
 *  - layouts/Templates/Dossier/Tutoriel.vue (documentation, étapes, etc.)
 *  - layouts/Templates/Journal/Default.vue
 *  - layouts/Templates/Journal/Event.vue (place, date)
 *  - layouts/Templates/Journal/Newsletter.vue (?)
 *  Tumblr like
 *  - layouts/Templates/Journal/Text.vue
 *    - titre, contenu, tags
 *  - layouts/Templates/Journal/Photo.vue
 *    - une ou plusieurs phtotos, tags
 *  - layouts/Templates/Journal/Citation.vue
 *    - citation, tags
 *  - layouts/Templates/Journal/Lien.vue
 *    - lien, texte, tags
 *  - layouts/Templates/Journal/Discussion.vue
 *    - titre, dialogue, tags
 *  - layouts/Templates/Journal/Audio.vue
 *    - son, texte, tags
 *  - layouts/Templates/Journal/Vidéo.vue
 *    - vidéo, tags
 *
 * Convention pour le nommage des layouts :
 * - page standard : nom `default`, variantes [à mettre au point]
 * - MD racine : composant spécifique ?
 * - un fichier MD racine possède un composant `./src/pages/[NomDuFichierMd].vue`
 * - un sous-fichier MD définie son layout et/ou son template `./content/’layout]/nom-du-fichier.md`
 *
 * ?
 */
import Home from '@/content/pages/welcome.md'
import { useHead } from '@vueuse/head'
useHead({
  title: 'Hello',
  meta: [
    {
      name: 'description',
      content: 'Description du site'
    }
  ]
})
</script>
