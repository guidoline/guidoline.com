/**
 * Guidloine Windi / Tailwind preset
 */

// import { defineConfig } from 'windicss/helper'
import typography from 'windicss/plugin/typography'
// Preflight
import plugin from 'windicss/plugin'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
export default {
  /**
   * Convention nommage de couleurs
   * [context][usage][variant]
   * day.link
   * day.accent.light
   * day.accent.normal
   * day.accent.dark
   * day.text.lighter
   * day.text.light
   * day.text.normal
   * day.text.dark
   * day.text.darker
   * day.background.light
   * day.background.normal
   * day.background.dark
   * day.neutral|gray|unsaturate.normal
   * dark.link
   * dark.accent.light
   * dark.accent.normal
   * dark.accent.dark
   * dark.text.light
   * dark.text.normal
   * dark.text.dark
   * dark.background.ligt
   * dark.background.normal
   * dark.background.dark
   * etc.
   */
  theme: {
    colors: {
      primary: {
        light: '#ED5E4B',
        DEFAULT: '#ea4848',
        dark: '#D14153'
      }
    }
  }
}
// import windiComponents from './external/z-components/windi-components'
// import windiComponents from './external/z-components/windi-components.js'
// import { theme as zTheme } from './external/z-components/windi-preset.js'
// const textColor = colors.coolGray
// const zColors = {
//   primary: {
//     light: colors.amber[100],
//     DEFAULT: colors.amber[300],
//     dark: colors.amber[500],
//   },
// }
// // https://tailwindcss.com/docs/customizing-colors#naming-your-colors
// // https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
// const addOpacity = (variableName) => ({ opacityVariable, opacityValue}) => {
//   if (opacityValue !== undefined ) {
//     return `rgba(var(--${variableName}), ${opacityValue})`
//   }
//   if (opacityVariable !== undefined) {
//     return `rgba(var(--${variableName}), ${opacityVariable})`
//   }
//   return `rgb(var(--${variableName}))`
// }
// export default {
//   presets: [
//     // zTheme
//     require('./src/guidoline.windi.preset.js')
//   ],
//   // darkMode: 'class',
//   darkMode: 'media',
//   // preflight: false,
//   // https://windicss.org/guide/extractions.html#scanning
//   // https://github.com/windicss/vite-plugin-windicss/issues/206#issuecomment-870126991
//   extract: {
//     include: [
//       './external/**/*.vue',
//       './src/**/*.vue'
//     ]
//   },
//   // // https://github.com/windicss/vite-plugin-windicss/issues/37#issuecomment-782905876
//   // scan: {
//   //   include: [
//   //     // './external/z-components/z-menu.vue'
//   //     // path.resolve(__dirname, "..", "client", "**/*.tsx"),
//   //   ],
//   // },
//   attributify: {
//     prefix: 'w'
//   },
//   plugins: [
//     typography({
//       // modifiers: ['sm', 'lg']
//     }),
//     // plugin(({ addComponents }) => {
//     //   addComponents({
//     //     '.prose-container': {
//     //       'color': 'red',
//     //       '@apply': 'prose container mx-auto md:w-prose px-4 py-4',
//     //     }
//     //   })
//     // }),
//     plugin(function({ addBase, addComponents, theme }) {
//       // https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
//       // theme('fontSize.2xl') // [ '1.5rem', { lineHeight: '2rem' } ]
//       addBase({
//         'body': { color: textColor[700] },
//         // 'article img': { width: '100%' },
//         // 'h1': { color: colors.red[300] },
//         // 'h2': { color: colors.green[300] },
//         // 'h2': { color: theme('color.green')},
//         'a': { textDecoration: 'underline'},
//         ':root': { '--color-primary-light': theme('colors.primary.300')}
//       })
//       // Ajout de composant
//       /**
//        * @todo : créer un plugin séparé.
//        * ~~~
//        * // windiconfig.js
//        * import colors from 'windicss/colors
//        * import { ZButton } from 'z-component'
//        * export default {
//        *  plugins: [
//        *   plugin({ addComponents, theme }) {
//        *    addComponent(ZButton(theme))
//        *   }
//        *  ]
//        *  // Personnalisé le composannt
//        *  theme: {
//        *   ZButton: {
//        *    color: colors.amber[50],
//        *    background: colors.indigo[500]
//        *   }
//        *  }
//        * }
//        * ~~~
//         */
//       //  Testing :
//       // //  https://lmiller1990.github.io/electic/posts/20200301_best_practices_for_testing_vue_3_components.html
//       // const buttons = {
//       //   '.button': {
//       //     // color: 'red'
//       //     display: 'inline-flex',
//       //     'align-items': 'center',
//       //     'justify-content': 'center',
//       //     'min-height': theme('z-button.height', '2.25rem'),
//       //     padding: theme('z-button.padding', '0 1rem'),
//       //     'letter-spacing': theme('z-button.letterSpacing', theme('letterSpacing.wide')),
//       //     color: theme('z-button.color'),
//       //     background: theme('z-button.background'),
//       //     'vertical-align': 'middle',
//       //     '&.fab': {
//       //       color: theme('z-button.fab.color', theme('colors.rose.50')),
//       //       background: theme('z-button.fab.background', theme('colors.teal.500'))
//       //     }
//       //   }
//       // }
//       // addComponents(buttons)
//       // addComponents (windiComponents(theme))
//     }),
//     // plugin(windiComponents)
//   ],
//   shortcuts: {
//     // 'plugin-button': 'subpixel-antialiased',
//     'theme-global': 'text-gray-600',
//     'prose-container': 'prose container mx-auto md:w-prose px-4 pt-4 pb-12',
//   },
//   // preflight: false, // ± 15ko
//   theme: guidolineTheme
//   // theme: {
//   //   colors: {
//   //     ...colors,
//   //     primary: {
//   //       DEFAULT: 'pink'
//   //     }
//   //   }
//   // }
// }
