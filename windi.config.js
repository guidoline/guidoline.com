/**
 * Guidloine Windi / Tailwind preset
 */

// import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
// Preflight
import plugin from 'windicss/plugin'
// import { Colors as wColors } from 'windicss/colors'
import wColors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
// `colors` => `iniitalColors`
// Ces couleurs n'ont pas vocation à être appellées directement dans les
// templates, elles sont exploitées par les définitions de couleurs d'usages.
// Ne pas employer `DEFAULT`, mais plutôt `normal` du coup.
// ou conserver tout de même DEFAUlT pour un usage plus souple (
// ! Toutes les définition doivent avoir u `DEFAULT` dans ce cas.

const colors = {
  // shade ou grey
  // https://bulma.io/documentation/overview/colors/
  // @todo chiant de devoir écrire défault à chaque fois
  // modifier la sctructure des données afin de ne pas
  // avoir de couleurs `DEFAULT`
  // Ces couleurs initiales n'ont pa
  // white: {
  //   DEFAULT: wColors.zinc[50],
  //   invert:wColors.zinc[900]
  // },
  // black: {
  //   DEFAULT: wColors.zinc[900],
  //   invert: wColors.zinc[50]
  // },
  // grey: {
  //   lightest: {
  //     DEFAULT: wColors.zinc[100],
  //     invert: wColors.zinc[700]
  //   },
  //   lighter: {
  //     DEFAULT: wColors.zinc[200],
  //     invert: wColors.zinc[700]
  //   },
  //   light: {
  //     DEFAULT: wColors.zinc[300],
  //     invert: wColors.zinc[800]
  //   },
  //   DEFAULT: wColors.zinc[400],
  //   invert: wColors.zinc[900],
  //   dark: {
  //     DEFAULT: wColors.zinc[500],
  //     invert: wColors.zinc[200]
  //   },
  //   darker: {
  //     DEFAULT: wColors.zinc[600],
  //     invert: wColors.zinc[300]
  //   },
  //   darkest: {
  //     DEFAULT: wColors.zinc[700],
  //     invert: wColors.zinc[300]
  //   }
  // },
  /*
  Variante d'une couleur / Les shades

  sombre et lumineux
  dark and bright

  ombre et lumière
  shadow and light
  Ombrées : shaded / shady
  limineuse : luminous / bri  ght / illuminated
  */
  bright: {
    lighter: {
      DEFAULT: wColors.zinc[50],
      invert: wColors.zinc[500]
    },
    light: {
      DEFAULT: wColors.zinc[100],
      invert: wColors.zinc[700]
    },
    DEFAULT: wColors.zinc[200],
    invert: wColors.zinc[700],
    dark: {
      DEFAULT: wColors.zinc[300],
      invert: wColors.zinc[900]
    },
    darker: {
      DEFAULT: wColors.zinc[400],
      invert: wColors.zinc[900]
    }
  },
  shade: {
    lighter: {
      DEFAULT: wColors.zinc[500],
      invert: wColors.zinc[50]
    },
    light: {
      DEFAULT: wColors.zinc[600],
      invert: wColors.zinc[100]
    },
    DEFAULT: wColors.zinc[700],
    invert: wColors.zinc[100],
    dark: {
      DEFAULT: wColors.zinc[800],
      invert: wColors.zinc[200]
    },
    darker: {
      DEFAULT: wColors.zinc[900],
      invert: wColors.zinc[200]
    }
  },

  light: {
    // light: '#FFFDFC',
    // DEFAULT: '#F2F0F0',
    // dark: '#EBE6E6',
    // darker: '#B5B1B1'
    lighter: wColors.gray[50],
    light: wColors.gray[100],
    DEFAULT: wColors.gray[200],
    dark: wColors.gray[300],
    darker: wColors.gray[400]
  },
  dark: {
    // lighter: '#405259',
    // light: '#2A414C',
    // DEFAULT: '#1B2B33',
    // dark: '#11171C',
    lighter: wColors.gray[500],
    light: wColors.gray[600],
    DEFAULT: wColors.gray[700],
    dark: wColors.gray[800],
    darker: wColors.gray[900]
  },
  primary: {
    light: {
      DEFAULT: '#F06B62',
      invert: wColors.slate[800]
    },
    DEFAULT: '#EA4848',
    invert: wColors.slate[900],
    dark: {
      DEFAULT: '#C7364B',
      invert: wColors.slate[50]
    }
  },
  // @tester inverser Secondary et accent
  secondary: {
    light: {
      DEFAULT: '#F2E37E',
      invert: wColors.zinc[700]
    },
    DEFAULT: '#EBC855',
    invert: wColors.zinc[800],
    dark: {
      DEFAULT: '#DEA140',
      invert: wColors.zinc[900]
    },
    darker: {
      DEFAULT: '#CC380A',
      invert: wColors.zinc[900]
    }
  },
  accent: {
    light: {
      DEFAULT: '#CD63DB',
      invert: wColors.gray[800]
    },
    DEFAULT: '#B33EC7',
    invert: wColors.gray[900],
    dark: {
      DEFAULT: '#8C30B2',
      invert: wColors.gray[50]
    }
  },
  // Bulma like
  link: {},
  info: {
    dark: wColors.sky[400],
    DEFAULT: wColors.sky[300],
    light: wColors.sky[200],
    invert: wColors.zinc[800],
  },
  success: {
    dark: wColors.emerald[500],
    DEFAULT: wColors.emerald[400],
    light: wColors.emerald[300],
    invert: wColors.zinc[800],
  },
  warning: {
    dark: wColors.amber[400],
    DEFAULT: wColors.amber[300],
    light: wColors.amber[200],
    invert: wColors.zinc[800],
  },
  danger: {
    dark: wColors.red[400],
    DEFAULT: wColors.red[400],
    light: wColors.red[300],
    invert: wColors.zinc[800],
  },

}
const weights = {
  light: 300,
  normal: 400,
  bold: 500,
}
export default {
// export default defineConfig({
  darkMode: 'class',
  presets: [

  ],
  plugins: [
    typography({
      dark: true
    }),
    // Modifications des éléments de base
    /**
     * - `addBase` pour les élement par défaut d'une page (couleur du texte,
     *  couleur de fond, fonte, esapces blanc, etc.)
     * - `addComponent` pour des élement plus complexe (boutons, card, badge, etc.)
     *  - `addUtilities` pour le spetites utilitaires (centrage auto, etc.)
     */
    plugin(function({ addBase, theme }) {
      const md = theme('screens.md')
      addBase({
        'body': {
          color: theme('colors.day.text.DEFAULT'),
          background: theme('colors.day.background.DEFAULT')
        },
        'a': {
          color: theme('colors.day.link.DEFAULT'),
          '&:hover': {
            color: theme('colors.day.link.dark'),
            textDecoration: 'underline'
          }
        },
        '.dark': {
          'body': {
            color: theme('colors.night.text.DEFAULT'),
            background: theme('colors.night.background.DEFAULT')
          },
          'a': {
            color: theme('colors.night.link.DEFAULT'),
            '&:hover': { color: theme('colors.night.link.dark') }
          },
        },
        '.prose.container': {
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingTop: theme('padding.4'),
          paddingBottom: theme('padding.4'),
          maxWidth: md
        }
      })
    }),
    plugin(function({ addComponents, theme }) {
      addComponents({
        'a.tag': {
          color: theme('colors.day.background.DEFAULT'),
          backgroundColor: theme('colors.day.link.DEFAULT'),
          '&-variant': {
            // backgroundColor: 'green',
          }
        },
        // '.prose-container': {
        //   backgroundColor: 'red',
        //   '&:hover': {
        //     backgroundColor: 'yellow'
        //   },
        //   '@apply': 'prose container'
        // }
      })
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          'backgroundColor': '#3490dc',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          'backgroundColor': '#e3342f',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    })
  ],
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
   * day.hn.normal
   * day.background.light
   * day.background.normal
   * day.background.dark
   * day.neutral|gray|unsaturate.normal
   * night.link
   * night.accent.light
   * night.accent.dark
   * night.accent.night
   * night.text.light
   * night.text.normal
   * night.text.night
   * night.background.lihgt
   * night.background.normal
   * night.background.dark
   * etc.
   */
  theme: {
    container: {
      center: true
    },
    colors: {
      main: colors,
      // Nommage d'usage
      // tester :
      // - text.disabled
      // - text.DEFAULT
      // - text.strong
      // - brand.DEFAULT (primary)
      // @todo: nommer `invert`, plutôt que `bg` ?
      day: {
        // Text
        disabled: colors.shade.lighter,
        quiet: colors.shade.light,
        DEFAULT: colors.shade.DEFAULT,
        loud: colors.shade.dark,
        bg: colors.bright.light,
        // END Text
        link: {
          DEFAULT: colors.primary.dark.DEFAULT,
          active: colors.secondary.darker.DEFAULT,
          hover: colors.accent.dark.DEFAULT,
          visited: colors.shade.light.DEFAULT,
          disabled: colors.shade.DEFAULT
        },
        // link: {
        //   DEFAULT: colors.primary.dark,
        //   hover: colors.accent.dark,
        // },
        highlight: {
          DEFAULT: colors.dark.dark,
          bg: colors.secondary.light,
        },
        border: {
          quiet: colors.bright,
          DEFAULT: colors.bright.dark,
          loud: colors.bright.darker,
        },

        //
        // text: {
        //   lighter: colors.dark.lighter,
        //   light: colors.dark.light,
        //   DEFAULT: colors.dark.DEFAULT,
        //   dark: colors.dark.dark
        // },
        background: {
          light: colors.light.light,
          DEFAULT: colors.light.DEFAULT,
          dark: colors.light.dark,
          darker: colors.light.darker
        }
      },
      night: {
        // Text & background sont inversé par rapport à day
        DEFAULT: colors.light.DEFAULT,
        text: {
          light: colors.light.light,
          DEFAULT: colors.light.DEFAULT,
          dark: colors.light.dark
        },
        background: {
          light: colors.dark.light,
          DEFAULT: colors.dark.DEFAULT,
          dark: colors.dark.dark
        },
        // Link et accent reste de la même couleur
        link: {
          light: colors.primary.light,
          DEFAULT: colors.primary.DEFAULT,
          dark: colors.primary.dark
        }
      },
      insert: {
        text: {
          light: colors.dark.light,
          DEFAUT: colors.dark.DEFAULT,
          dark: colors.dark.dark
        },
        background: {
          light: colors.light.DEFAULT,
          DEFAULT: colors.light.dark,
          dark: colors.light.darker
        },
        link: {
          light: colors.primary.light,
          DEFAULT: colors.primary.DEFAULT,
          dark: colors.primary.dark
        }
      },
      callout: {
        text: {
          light: colors.dark.light,
          DEFAULT: colors.primary.invert,
          dark: colors.dark.dark
        },
        background: {
          light: colors.primary.light,
          DEFAULT: colors.primary.DEFAULT,
          dark: colors.primary.dark
        },
        link: {
          light: colors.secondary.light,
          DEFAULT: colors.secondary.DEFAULT,
          dark: colors.secondary.dark,
        }
      },
    },
    extend: {
      // Configuration de Typography
      // https://github.com/windicss/windicss/blob/main/src/plugin/typography/styles.ts
      // @todo `colors` doit être préparé dans une variable en ammont afin
      // d'éviter de devoir ressaisr de nouvelles variable (ex. couleur du text)
      typography: {
        DARK: {
          css: {
            a: {
              color: colors.primary.DEFAULT
            },
            strong: {
              color: colors.light.light
            },
            hr: {
              backgroundColor: colors.light.darker
            }
          }
        },
        DEFAULT: {
          css: {
            color: colors.shade.dark,
            a: {
              color: colors.primary.DEFAULT
            },
            strong: {
              color: colors.dark.dark,
              fontWeight: weights.bold
            },
            h1: {
              color: colors.dark.DEFAULT,
              fontWeight: 'normal'
            },
            h2: {
              color: colors.dark.DEFAULT,
              fontWeight: 'normal'
            },
            h3: {
              color: colors.dark.DEFAULT,
              fontWeight: 'normal'
            },
            hr: {
              height: '1px',
              backgroundColor: colors.dark.lighter
            }
          }
        }
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
