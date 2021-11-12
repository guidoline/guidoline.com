/**
 * Utilities
 *
 */

import MD from 'markdown-it'
const markdownify = (text, options = {}) => {
  return new MD({
    html: false,
    linkify: false, // Éviter les liens dans les extraits
    typographer: true,
    quotes: ['«\x40', '\x40»', '‹\x40', '\x40›'],
    ...options
    }).render(text)
}

// https://github.com/dodo/node-slug#options
import slug from 'slug'
slug.charmap['’'] = '-'
slug.charmap['\''] = '-'
const slugify = (text) => slug(text, { locale: 'fr' })

const stringsToURL = (route, texts) => texts.map(text => ({
  name: text,
  to: `${route}${slugify(text)}`
}))

export { slugify, stringsToURL, markdownify }
