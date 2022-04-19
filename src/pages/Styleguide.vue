<script setup>
import ContainerProse from '~/components/Layout/Container/Prose.vue'
defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style scoped>
td { @apply p-4; }
</style>
<template>
  <LayoutDistractionFree :content="content">
    <ContainerProse>
      <h1>Couleurs initiales</h1>
      https://accessible-colors.com/
      <p>Chaque couleur initiale doit avoir sa couleur inverse de sécurité.</p>
      <p>
        Bulma colors (10): white, black, light, dark, primary, link, info, success, warning, danger.
      </p>
      <p>
        Bulma shades (8): black-bis, black-ter, grey-darker, grey-dark, grey-light, grey-lighter, white-ter, white-bis,
      </p>

      <table class="text-center">
        <tr>
          <td class="bg-main-primary-light text-main-primary-light-invert">Primary light</td>
          <td class="bg-main-primary text-main-primary-invert">Primary</td>
          <td class="bg-main-primary-dark text-main-primary-dark-invert">Primary dark</td>
        </tr>
        <tr>
          <td class="text-main-primary-light bg-main-primary-light-invert">Primary light invert</td>
          <td class="text-main-primary bg-main-primary-invert">Primary invert</td>
          <td class="text-main-primary-dark bg-main-primary-dark-invert">Primary dark invert</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-secondary-light text-main-secondary-light-invert">secondary light</td>
          <td class="bg-main-secondary text-main-secondary-invert">secondary</td>
          <td class="bg-main-secondary-dark text-main-secondary-dark-invert">secondary dark</td>
        </tr>
        <tr>
          <td class="text-main-secondary-light bg-main-secondary-light-invert">secondary light invert</td>
          <td class="text-main-secondary bg-main-secondary-invert">secondary invert</td>
          <td class="text-main-secondary-dark bg-main-secondary-dark-invert">secondary dark invert</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-accent-light text-main-accent-light-invert">accent light</td>
          <td class="bg-main-accent text-main-accent-invert">accent</td>
          <td class="bg-main-accent-dark text-main-accent-dark-invert">accent dark</td>
        </tr>
        <tr>
          <td class="text-main-accent-light bg-main-accent-light-invert">accent light invert</td>
          <td class="text-main-accent bg-main-accent-invert">accent invert</td>
          <td class="text-main-accent-dark bg-main-accent-dark-invert">accent dark invert</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-bright-lighter text-main-bright-lighter-invert">bright lighter</td>
          <td class="bg-main-bright-light text-main-bright-light-invert">bright light</td>
          <td class="bg-main-bright text-main-bright-invert">bright</td>
          <td class="bg-main-bright-dark text-main-bright-dark-invert">bright dark</td>
          <td class="bg-main-bright-darker text-main-bright-darker-invert">bright darker</td>
        </tr>
        <tr>
          <td class="text-main-bright-lighter bg-main-bright-lighter-invert">bright lighter invert</td>
          <td class="text-main-bright-light bg-main-bright-light-invert">bright light invert</td>
          <td class="text-main-bright bg-main-bright-invert">bright invert</td>
          <td class="text-main-bright-dark bg-main-bright-dark-invert">bright dark invert</td>
          <td class="text-main-bright-darker bg-main-bright-darker-invert">bright darker invert</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-shade-lighter text-main-shade-lighter-invert">shade lighter</td>
          <td class="bg-main-shade-light text-main-shade-light-invert">shade light</td>
          <td class="bg-main-shade text-main-shade-invert">shade</td>
          <td class="bg-main-shade-dark text-main-shade-dark-invert">shade dark</td>
          <td class="bg-main-shade-darker text-main-shade-darker-invert">shade darker</td>
        </tr>
        <tr>
          <td class="text-main-shade-lighter bg-main-shade-lighter-invert">shade lighter invert</td>
          <td class="text-main-shade-light bg-main-shade-light-invert">shade light invert</td>
          <td class="text-main-shade bg-main-shade-invert">shade invert</td>
          <td class="text-main-shade-dark bg-main-shade-dark-invert">shade dark invert</td>
          <td class="text-main-shade-darker bg-main-shade-darker-invert">shade darker invert</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-link-light text-main-link-light-invert">link light</td>
          <td class="bg-main-link text-main-link-invert">link</td>
          <td class="bg-main-link-dark text-main-link-dark-invert">link dark</td>
        </tr>
        <tr>
          <td class="text-main-link-light bg-main-link-light-invert">link light</td>
          <td class="text-main-link bg-main-link-invert">link</td>
          <td class="text-main-link-dark bg-main-link-dark-invert">link dark</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-info text-main-info-invert border-t-6 border-b-6 border-main-info-dark border-t-main-info-light">
            info
          </td>
          <td class="bg-main-success text-main-success-invert border-t-6 border-b-6 border-main-success-dark border-t-main-success-light">
            success
          </td>
          <td class="bg-main-warning text-main-warning-invert border-t-6 border-b-6 border-main-warning-dark border-t-main-warning-light">
            warning
          </td>
          <td class="bg-main-danger text-main-danger-invert border-t-6 border-b-6 border-main-danger-dark border-t-main-danger-light">
            danger
          </td>
        </tr>
        <tr>
          <td class="text-main-info bg-main-info-invert">info</td>
          <td class="text-main-success bg-main-success-invert">success</td>
          <td class="text-main-warning bg-main-warning-invert">warning</td>
          <td class="text-main-danger bg-main-danger-invert">danger</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-success-light text-main-success-light-invert">success light</td>
          <td class="bg-main-success text-main-success-invert">success</td>
          <td class="bg-main-success-dark text-main-success-dark-invert">success dark</td>
        </tr>
        <tr>
          <td class="text-main-success-light bg-main-success-light-invert">success light</td>
          <td class="text-main-success bg-main-success-invert">success</td>
          <td class="text-main-success-dark bg-main-success-dark-invert">success dark</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-warning-light text-main-warning-light-invert">warning light</td>
          <td class="bg-main-warning text-main-warning-invert">warning</td>
          <td class="bg-main-warning-dark text-main-warning-dark-invert">warning dark</td>
        </tr>
        <tr>
          <td class="text-main-warning-light bg-main-warning-light-invert">warning light</td>
          <td class="text-main-warning bg-main-warning-invert">warning</td>
          <td class="text-main-warning-dark bg-main-warning-dark-invert">warning dark</td>
        </tr>
      </table>

      <table class="text-center">
        <tr>
          <td class="bg-main-danger-light text-main-danger-light-invert">danger light</td>
          <td class="bg-main-danger text-main-danger-invert">danger</td>
          <td class="bg-main-danger-dark text-main-danger-dark-invert">danger dark</td>
        </tr>
        <tr>
          <td class="text-main-danger-light bg-main-danger-light-invert">danger light</td>
          <td class="text-main-danger bg-main-danger-invert">danger</td>
          <td class="text-main-danger-dark bg-main-danger-dark-invert">danger dark</td>
        </tr>
      </table>

      <h1>Secondary</h1>
      <h1>Accent</h1>

      <h1>Shades</h1>
      <p>

      </p>


      <h1>Couleurs dérivées</h1>
      <p>Note: nommage par usage (texte et fond).</p>
      <p>Set de couleur à personnaliser à chaque nouveau design</p>
      <p>Ne mettre en place que des couleurs d'usage réel, inutile de mettre en place des couleurs qui ne seront jamais utilisées.</p>
      <p>Chaque couleur de fond doit avoir une couleur de texte lisible.</p>

      <h2>Day</h2>
      <div class="bg-day-bg">
        <p class="p-4 bg-day-bg text-day">
          <code>day.bg</code>
          Fond par défault et texte par défaut.
        </p>
        <p class="p-4 text-day-disabled">
          <code>day.disabled</code>
          Text disabled (texte barré, annulé)
        </p>
        <p class="p-4 text-day-quiet">
          <code>day.quiet</code>
          <b>Text quiet (ajustement visuel pour grand texte, titrage)</b>
        </p>
        <p class="p-4 text-day">
          <code>day</code>
          Text normal (texte de lecture)
        </p>
        <p class="p-4 text-day-loud">
          <code>day.loud</code>
          Text loud (sématique forte, survol (interaction sans lien (ex. info)))
        </p>
        <p class="p-4 text-day-link">
          <code>day.link</code>
          Text link (lien)
        </p>
        <p class="p-4 text-day-link-hover">
          <code>day.link.hover</code>
          Text link au survol (lien)
        </p>
        <p class="p-4 text-day-link-active">
          <code>day.link.active</code>
          Text link actif (lien)
        </p>
        <p class="p-4 text-day-link-visited">
          <code>day.link.visited</code>
          Text link visité (lien)
        </p>
        <p class="p-4 text-day-link-disabled">
          <code>day.link.disabled</code>
          Text link désactivé (lien)
        </p>

        <p class="p-4 text-day-highlight bg-day-highlight-bg">
          <code>day.highlight day.higlight.bg</code>
          Text hightlight (surlignage)
        </p>

        <p class="p-4 border-3 border-day-border-quiet">
          <code>day.border.quiet</code>
          Border quiet (tiret fin)
        </p>
        <p class="p-4 border-3 border-day-border-DEFAULT">
          <code>day.border</code>
          Border (bordure en accord avec le fond)
        </p>
        <p class="p-4 border-3 border-day-border-loud">
          <code>day.border</code>
          Border (bordure en accord avec le fond)
        </p>

      </div>
    </ContainerProse>
    <ContainerProse>
      <div v-if="content" v-html="content.content" />
    </ContainerProse>
  </LayoutDistractionFree>
</template>
