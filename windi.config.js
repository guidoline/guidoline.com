// import { defineConfig } from 'windicss/helper'
import typography from 'windicss/plugin/typography'
// Preflight
import plugin from 'windicss/plugin'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
// import windiComponents from './external/z-components/windi-components'
// import windiComponents from './external/z-components/windi-components.js'
// import { theme as zTheme } from './external/z-components/windi-preset.js'
const textColor = colors.coolGray
const zColors = {
  primary: {
    light: colors.amber[100],
    DEFAULT: colors.amber[300],
    dark: colors.amber[500],
  },
}
// https://tailwindcss.com/docs/customizing-colors#naming-your-colors
// https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
const addOpacity = (variableName) => ({ opacityVariable, opacityValue}) => {
  if (opacityValue !== undefined ) {
    return `rgba(var(--${variableName}), ${opacityValue})`
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(--${variableName}), ${opacityVariable})`
  }
  return `rgb(var(--${variableName}))`
}
export default {
  presets: [
    // zTheme
  ],
  // darkMode: 'class',
  darkMode: 'media',
  // preflight: false,
  // https://windicss.org/guide/extractions.html#scanning
  // https://github.com/windicss/vite-plugin-windicss/issues/206#issuecomment-870126991
  extract: {
    include: [
      './external/**/*.vue',
      './src/**/*.vue'
    ]
  },
  // // https://github.com/windicss/vite-plugin-windicss/issues/37#issuecomment-782905876
  // scan: {
  //   include: [
  //     // './external/z-components/z-menu.vue'
  //     // path.resolve(__dirname, "..", "client", "**/*.tsx"),
  //   ],
  // },
  attributify: {
    prefix: 'w'
  },
  plugins: [
    typography({
      // modifiers: ['sm', 'lg']
    }),
    // plugin(({ addComponents }) => {
    //   addComponents({
    //     '.prose-container': {
    //       'color': 'red',
    //       '@apply': 'prose container mx-auto md:w-prose px-4 py-4',
    //     }
    //   })
    // }),
    plugin(function({ addBase, addComponents, theme }) {
      // https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
      // theme('fontSize.2xl') // [ '1.5rem', { lineHeight: '2rem' } ]
      addBase({
        'body': { color: textColor[700] },
        // 'article img': { width: '100%' },
        // 'h1': { color: colors.red[300] },
        // 'h2': { color: colors.green[300] },
        // 'h2': { color: theme('color.green')},
        'a': { textDecoration: 'underline'},
        ':root': { '--color-primary-light': theme('colors.primary.300')}
      })
      // Ajout de composant
      /**
       * @todo : créer un plugin séparé.
       * ~~~
       * // windiconfig.js
       * import colors from 'windicss/colors
       * import { ZButton } from 'z-component'
       * export default {
       *  plugins: [
       *   plugin({ addComponents, theme }) {
       *    addComponent(ZButton(theme))
       *   }
       *  ]
       *  // Personnalisé le composannt
       *  theme: {
       *   ZButton: {
       *    color: colors.amber[50],
       *    background: coloes.indigo[500]
       *   }
       *  }
       * }
       * ~~~
        */
      //  Testing :
      // //  https://lmiller1990.github.io/electic/posts/20200301_best_practices_for_testing_vue_3_components.html
      // const buttons = {
      //   '.button': {
      //     // color: 'red'
      //     display: 'inline-flex',
      //     'align-items': 'center',
      //     'justify-content': 'center',
      //     'min-height': theme('z-button.height', '2.25rem'),
      //     padding: theme('z-button.padding', '0 1rem'),
      //     'letter-spacing': theme('z-button.letterSpacing', theme('letterSpacing.wide')),
      //     color: theme('z-button.color'),
      //     background: theme('z-button.background'),
      //     'vertical-align': 'middle',
      //     '&.fab': {
      //       color: theme('z-button.fab.color', theme('colors.rose.50')),
      //       background: theme('z-button.fab.background', theme('colors.teal.500'))
      //     }
      //   }
      // }
      // addComponents(buttons)
      // addComponents (windiComponents(theme))
    }),
    // plugin(windiComponents)
  ],
  shortcuts: {
    // 'plugin-button': 'subpixel-antialiased',
    'theme-global': 'text-gray-600',
    'prose-container': 'prose container mx-auto md:w-prose px-4 py-4',
  },
  // preflight: false, // ± 15ko
  theme: {
    // Remplacer les couleurs par défaut
    // colors: {
    //   ...colors,
    //   textColor,
    //   primary: {
    //     DEFAULT: colors.teal[500],
    //     ...colors.teal
    //   },
    //   'primary-invert': {
    //     DEFAULT: colors.blueGray[100],
    //     ...colors.blueGray
    //   }
    //   // L'opacité n'est pas pris en charge avec des custom var, cf. :
    //   // https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
    //   // 'custom-css-var': 'var(--my-custom-css-var)',
    //   // 'custom-css-var': addOpacity('my-custom-css-var'),
    // },
    ls: '12rem',
    // button: theme => theme('button'),
    // 'z-inset': {
    //   color: 'green',
    //   background: 'black'
    // },
    // 'z-button': {
    //   // @tester :
    //   // color: theme => theme('colors.textColor'),
    //   color: textColor[700],
    //   background: textColor[100],
    //   // letterSpacing: defaultTheme.letterSpacing.wide,
    //   // @bugs : Le réfencement ne semble pas fonctionner cf. issues
    //   // https://tailwindcss.com/docs/theme#referencing-other-values
    //   // letterSpacing: '32rem',
    //   letterSpacing: theme => theme('ls'),
    //   // letterSpacing: defaultTheme.letterSpacing.widest,
    //   // FAB aka primary
    //   fab: {
    //     // @todo : utiliser le vocabulaire Windi
    //     // 'textColor': colors.amber[50],
    //     color: colors.amber[50],
    //     // 'bgColor': colors.indigo[500],
    //     background: colors.indigo[500],
    //   },
    // },
    'z-button': theme => ({
      color: textColor[700],
      background: theme('colors.primary.100'),
      letterSpacing: theme('ls'),
      fab: {
        color: colors.amber[50],
        background: colors.indigo[500],
      },
    }),
    container: {
      center: true,
      margin: '0 auto',
      padding: '1rem',
    },
    gridTemplateColumns: {
      frameless: 'repeat(auto-fit, 30ch)'
    },
    extend: {
      // ...zTheme,
      // Étendre les couleurs par défaut
      colors: {
        // @todo : utiiser un nommage des varaintes plus classique. cf. :
        // https://tailwindcss.com/docs/customizing-colors#custom-colors
        // ela facilittera l'usage de variables CSS
        primary: colors.indigo,
        // inset: colors.amber
        // https://web-crunch.com/posts/how-to-extend-tailwind-css
        // /!\ Ce ne devrais pas être un nom de comosat ici, mais
        // de type de couleur ?
        inset: {
          // Nom de variante utilitaire
          bg: 'gray',
          fancy: {
            bg: 'pink'
          },
          // light: 'var(--z-inset-color-light)',
          // DEFAULT: 'var(--z-inset-color)',
          // dark: 'var(--z-inset-color-dark)',
          // light: colors.indigo[100],
          // DEFAULT: colors.indigo[300],
          // dark: colors.indigo[500],
          light: zColors.primary.light,
          // DEFAULT: zColors.primary.DEFAULT,
          DEFAULT: 'var(--z-inset-bg-color)',
          dark: zColors.primary.dark,
        }
      },
      // z: {
      //   spacing: {
      //     sm: defaultTheme.padding[24]
      //   }
      // },
      // peut être ajouté sous forme de preset ?
      // padding: theme => ({
      //   inset: theme('z.spacing.sm')
      // }),
      // margin: {
      //   inset: defaultTheme.margin[4]
      // },
      // fontFamily: {
      //   sans: ['typo-a', 'typo-b'],
      //   serif: ['typo-a', 'typo-b']
      // }
      // @todo : dark mode https://github.com/leerob/leerob.io/blob/453c7a666d1650ef507849efe54dec51d719e357/tailwind.config.js#L27
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
            // color: textColor[700],
            strong: { color: textColor[800] },
            code: { color: textColor[800] },
            h1: {
              color: textColor[800],
              fontWeight: 'normal'
            },
            h2: {
              color: textColor[800],
              fontWeight: 'normal'
            },
            h3: {
              color: textColor[800],
              fontWeight: 'normal'
            },
            h4: {
              color: textColor[800],
              fontWeight: '600'
            },
            h5: {
              color: textColor[800],
              fontSize: '1rem',
              fontWeight: '600'
            },
            h6: {
              color: textColor[800],
              fontSize: '1rem',
              fontWeight: '600'
            },
            img: {
              display: 'block',
              minWidth: '100%',
              maxWidth: '100%'
            },
            hr: {
              borderBottomWidth: '0.3rem'
            }
          }
        }
      }
    }
  }
}
