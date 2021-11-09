// https://tailwindcss.com/docs/plugins#adding-components

// Exemple de plugin :
// https://www.ordinarycoders.com/blog/article/tailwindcss-plugins-github
// https://github.com/nathanheffley/tailwindcss-card/blob/master/index.js
export default function({theme, addComponents, addUtilities}) {

  // Exempl d'utilitaire
  addUtilities({
    '.toto': {
      background: 'red'
    }
  })
  // Usage :
  // <div class="toto">Example</div>
  // tester
  // .tata { @apply toto }

  // const zButton = theme('z-button')
  const button = {
  // return {
    // @todo : Ne conserver que les prorpiétes réglables (couleurs, espaces)
    // Les autres propriétés sont définie directement sur le composant.
    // Cela est plus simple dans un premier temps.
    // Il sera possible de rapatrier toutes les proprités dans le
    // plugin plus tard afin de ne pas rendre le composant dépendant à WindiCSS
    '.z-button': {
    // '.z-button': {
      // color: 'red'
      // display: 'inline-flex',
      // 'align-items': 'center',
      // alignItems: 'center',
      // 'justify-content': 'center',
      minHeight: theme('z-button.height', '2.25rem'),
      padding: theme('z-button.padding', '0 1rem'),
      letterSpacing: theme('z-button.letterSpacing', theme('letterSpacing.wide')),
      // 'vertical-align': 'middle',
      color: theme('z-button.color'),
      '--tw-bg-opacity': '0.8',
      background: theme('z-button.background', 'transparent'),
      '&:hover': {
        '--tw-bg-opacity': '1',
        background: theme('z-button.background'),
      },
      '&.tonal': {
        '--tw-bg-opacity': '0.1',
        'mix-blend-mode': 'multiply'
      },
      '&.fab': {
        color: theme('z-button.fab.color', theme('colors.rose.50')),
        background: theme('z-button.fab.background', theme('colors.teal.500'))
      }
    }
  }

  addComponents(button, {
    respectPrefix: false,
    // https://tailwindcss.com/docs/plugins#variants-1
    // https://tailwindcss.com/docs/configuring-variants
    // variants: ['responsive', 'hover']
  })
}
