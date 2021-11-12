import defaultTheme from "windicss/defaultTheme"

export const theme = {
  theme: {
    extend: {
      gridTemplateColumns: {
        nt: 'repeat(16, minmax(0, 1fr))',
        zgrid: 'repeat(auto-fit, minmax(calc(var(--grid-cell-width) * 0.80), 1fr));',
        z: 'repeat(auto-fit, minmax(calc(var(--grid-cell-width) * 0.80), 1fr));',
        z: {
          grid: 'repeat(auto-fit, minmax(calc(var(--grid-cell-width) * 0.80), 1fr));',
        },
        'z-grid': 'repeat(auto-fit, minmax(calc(var(--grid-cell-width) * 0.80), 1fr));',
      },
      // Z components tokens
      z: {
        spacing: {
          sm: defaultTheme.padding[4]
        }
      },
      // Extends Windicss native tokens
      // Usage: `p-insert`, py-insert`, etc.
      padding: theme => ({
        inset: theme('z.spacing.sm')
      }),
      margin: {
        inset: defaultTheme.margin[4]
      }
    }
  }
}

export default theme
