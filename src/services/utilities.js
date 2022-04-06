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

const slugify = (text) => slug(text.toString(), { locale: 'fr' })

const stringsToURL = (route, texts) => texts.filter(t=>t).map(text => {
  const slug = slugify(text)
  return {
    name: text,
    slug: slug,
    to: `${route}${slug}`
  }
})

// Uppercase First Letter
const ucFirst = (text) => text.charAt(0).toUpperCase() + text.slice(1)

export { slugify, stringsToURL, markdownify, ucFirst }
