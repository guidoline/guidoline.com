// import { defineConfig } from 'windicss/helper'
import typography from 'windicss/plugin/typography'
// Preflight
import plugin from 'windicss/plugin'
import colors from 'windicss/colors'
const textColor = colors.coolGray
export default {
  // darkMode: 'class',
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
    plugin(function({ addBase, theme }) {
      // https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
      // theme('fontSize.2xl') // [ '1.5rem', { lineHeight: '2rem' } ]
      addBase({
        'body': { color: textColor[700] },
        // 'article img': { width: '100%' },
        // 'h1': { color: colors.red[300] },
        // 'h2': { color: colors.green[300] },
        // 'h2': { color: theme('color.green')},
        'a': { textDecoration: 'underline'}
      })
    })
  ],
  shortcuts: {
    'theme-global': 'text-gray-600',
    'prose-container': 'prose container mx-auto md:w-prose px-4 py-4'
  },
  // preflight: false, // ± 15ko
  theme: {
    colors: {
      ...colors,
      textColor,
      primary: colors.teal,
      'primary-invert': colors.white
    },
    extend: {
      // fontFamily: {
      //   sans: ['typo-a', 'typo-b'],
      //   serif: ['typo-a', 'typo-b']
      // }
      typography: {
        DEFAULT: {
          css: {
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
            }
          }
        }
      }
    }
  },

}
