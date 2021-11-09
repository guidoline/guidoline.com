import defaultTheme from "windicss/defaultTheme"

export const theme = {
  theme: {
    extend: {
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
