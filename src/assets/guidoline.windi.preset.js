/**
 * Thème Guidoline
 *
 * @bug le hot reload ne sembla pas fonctionner depuis `./src/assets`
 */
//  export { default } from "./types/defaultTheme";`
// export const guidoline = {
  // export default function guidoline() { return {
// export default guidolineTheme = {
// import colors from 'windicss/colors'
module.exports = {
  colors: {
    primary: {
      light: '#ED5E4B',
      DEFAULT: '#ea4848',
      dark: '#D14153'
    }
  }
}

// theme: {
//   // Remplacer les couleurs par défaut
//   colors: {
//     ...colors,
//     textColor,
//     primary: {
//       DEFAULT: colors.teal[500],
//       ...colors.teal
//     },
//     'primary-invert': {
//       DEFAULT: colors.blueGray[100],
//       ...colors.blueGray
//     }
//   },
//   //   // L'opacité n'est pas pris en charge avec des custom var, cf. :
//   //   // https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
//   //   // 'custom-css-var': 'var(--my-custom-css-var)',
//   //   // 'custom-css-var': addOpacity('my-custom-css-var'),
//   // },
//   ls: '12rem',
//   // button: theme => theme('button'),
//   // 'z-inset': {
//   //   color: 'green',
//   //   background: 'black'
//   // },
//   // 'z-button': {
//   //   // @tester :
//   //   // color: theme => theme('colors.textColor'),
//   //   color: textColor[700],
//   //   background: textColor[100],
//   //   // letterSpacing: defaultTheme.letterSpacing.wide,
//   //   // @bugs : Le réfencement ne semble pas fonctionner cf. issues
//   //   // https://tailwindcss.com/docs/theme#referencing-other-values
//   //   // letterSpacing: '32rem',
//   //   letterSpacing: theme => theme('ls'),
//   //   // letterSpacing: defaultTheme.letterSpacing.widest,
//   //   // FAB aka primary
//   //   fab: {
//   //     // @todo : utiliser le vocabulaire Windi
//   //     // 'textColor': colors.amber[50],
//   //     color: colors.amber[50],
//   //     // 'bgColor': colors.indigo[500],
//   //     background: colors.indigo[500],
//   //   },
//   // },
//   'z-button': theme => ({
//     color: textColor[700],
//     background: theme('colors.primary.100'),
//     letterSpacing: theme('ls'),
//     fab: {
//       color: colors.amber[50],
//       background: colors.indigo[500],
//     },
//   }),
//   container: {
//     center: true,
//     margin: '0 auto',
//     padding: '1rem',
//   },
//   gridTemplateColumns: {
//     frameless: 'repeat(auto-fit, 30ch)'
//   },
//   extend: {
//     // ...zTheme,
//     // Étendre les couleurs par défaut
//     colors: {
//       // @todo : utiiser un nommage des varaintes plus classique. cf. :
//       // https://tailwindcss.com/docs/customizing-colors#custom-colors
//       // ela facilittera l'usage de variables CSS
//       primary: '#ea4848',
//       // inset: colors.amber
//       // https://web-crunch.com/posts/how-to-extend-tailwind-css
//       // /!\ Ce ne devrais pas être un nom de comosat ici, mais
//       // de type de couleur ?
//       inset: {
//         // Nom de variante utilitaire
//         bg: 'gray',
//         fancy: {
//           bg: 'pink'
//         },
//         // light: 'var(--z-inset-color-light)',
//         // DEFAULT: 'var(--z-inset-color)',
//         // dark: 'var(--z-inset-color-dark)',
//         // light: colors.indigo[100],
//         // DEFAULT: colors.indigo[300],
//         // dark: colors.indigo[500],
//         light: zColors.primary.light,
//         // DEFAULT: zColors.primary.DEFAULT,
//         DEFAULT: 'var(--z-inset-bg-color)',
//         dark: zColors.primary.dark,
//       }
//     },
//     // z: {
//     //   spacing: {
//     //     sm: defaultTheme.padding[24]
//     //   }
//     // },
//     // peut être ajouté sous forme de preset ?
//     // padding: theme => ({
//     //   inset: theme('z.spacing.sm')
//     // }),
//     // margin: {
//     //   inset: defaultTheme.margin[4]
//     // },
//     // fontFamily: {
//     //   sans: ['typo-a', 'typo-b'],
//     //   serif: ['typo-a', 'typo-b']
//     // }
//     // @todo : dark mode https://github.com/leerob/leerob.io/blob/453c7a666d1650ef507849efe54dec51d719e357/tailwind.config.js#L27
//     typography: {
//       DEFAULT: {
//         css: {
//           'max-width': 'none',
//           // color: textColor[700],
//           strong: { color: textColor[800] },
//           code: { color: textColor[800] },
//           h1: {
//             color: textColor[800],
//             fontWeight: 'normal'
//           },
//           h2: {
//             color: textColor[800],
//             fontWeight: 'normal'
//           },
//           h3: {
//             color: textColor[800],
//             fontWeight: 'normal'
//           },
//           h4: {
//             color: textColor[800],
//             fontWeight: '600'
//           },
//           h5: {
//             color: textColor[800],
//             fontSize: '1rem',
//             fontWeight: '600'
//           },
//           h6: {
//             color: textColor[800],
//             fontSize: '1rem',
//             fontWeight: '600'
//           },
//           img: {
//             display: 'block',
//             minWidth: '100%',
//             maxWidth: '100%'
//           },
//           hr: {
//             borderBottomWidth: '0.3rem'
//           }
//         }
//       }
//     }
//   }
// }
