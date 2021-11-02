/**
 * Utilities
 *
 */

// https://github.com/dodo/node-slug#options
import slug from 'slug'
slug.charmap['’'] = '-'
slug.charmap['\''] = '-'
const slugify = (text) => slug(text, { locale: 'fr' })

const stringsToURL = (route, texts) => texts.map(text => ({
  name: text,
  to: `${route}${slug(text)}`
}))

export { slugify, stringsToURL }
