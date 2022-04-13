import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItTOC from 'markdown-it-table-of-contents'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItIns from 'markdown-it-ins'
import EleventyImage from '@11ty/eleventy-img'
/**
 * @todo
 * Tester un rendu Markdown dans la vue directement.
 * https://github.com/antfu/vite-plugin-md
 */

// Scan de fichiers recursif
function scanFiles(directory, extensions, paths) {
  const files = fs.readdirSync(directory)
  paths = paths ||[]

  for (let file of files) {
    file = path.join(directory, file)
    if (fs.statSync(file).isDirectory()) {
      paths = scanFiles(file, extensions, paths)
      continue
    }
    if (!extensions.includes(path.extname(file))) continue
    paths.push(file)
  }

  return paths
}

// Transformer les fichier en données
// @todo : ajouter un système de filtre sur les données matter
function markdownFilesToData(files, directory, markdownOptions) {
  return files.reduce((data, file) => {
    const pathParse = path.parse(file)
    const dirname = path.dirname(file)
    const name = pathParse.name
    const matter = grayMatter.read(file, {
      excerpt: (file, options) => {
        file.excerpt = file.data.excerpt
          || file.data.description
          || file.content.split('\n').slice(0, 4).join(' ')
        file.excerpt = file.excerpt.replace(/[#]+/g, '')
      }
    })
    data.push({
      path: file.replace(directory, '').replace('.md', ''),
      dirname,
      name,
      excerpt:  renderMarkdown(matter.excerpt, markdownOptions),
      description: matter.description || matter.excerpt,
      contentRaw: matter.content,
      content: renderMarkdown(matter.content, markdownOptions),
      ...matter.data
    })
    return data
  }, [])
}

function renderMarkdown(rawMarkdown, options) {
  const markdown = new MarkdownIt({
    html: true,
    linkfy: true,
    typographer: true,
    breaks: false,
    quotes: ['«\xa0', '\xa0»', '<\xa0', '\xa0>'],
    ...options
  })
  markdown.use(MarkdownItAnchor.default)
  markdown.use(MarkdownItTOC, {
    includeLevel: [2, 3],
    containerHeaderHtml: '<h3>Table des matières</h3>'
  })
  markdown.use(MarkdownItFootnote)
  markdown.use(MarkdownItIns)

  // Retaillage et optimisation des images
  // @todo il semble que les images soient optimisées 2 x lors du build production
  // @todo à etendre à toutes les images Vite.
  // @todo externaliser la configuration
  const production =
    (options.vite?.command === 'build' || false)
    && (options.vite?.mode === 'production' || false)

  if (production) {
    markdown.renderer.rules.image = function(tokens, idx, options, env, self) {
      const token = tokens[idx]
      let imgSrc = token.attrGet('src')
      const remote = imgSrc.startsWith('http')
      // console.log('OPTION', options)
      // console.log('ENV', env)
      // console.log('SELF', self)

      if (!remote) { imgSrc = `./public${imgSrc}` }

      // @todo Tester si le fichier existe

      const imgAlt = token.content
      // Taille par défaut
      const imgSize = token.attrGet('title') || '(max-width: 200px) 100vw, 200px'
      const widths = [250, 426, 580, 768]
      const imgOpts = {
        widths: widths
          .concat(widths.map(w => w * 2))
          .filter((v, i, s) => s.indexOf(v) === i),
        formats: ['webp', 'jpeg'],
        urlPath: '/uploads/', // HTML output
        outputDir: './dist/uploads/'

      }
      EleventyImage(imgSrc, imgOpts)

      console.log('Optimisation de: ', imgSrc)

      let metadata
      if (remote) {
        metadata = EleventyImage.statsByDimensionsSync(imgSrc, imgOpts)
      } else {
        metadata = EleventyImage.statsSync(imgSrc, imgOpts)
      }

      return EleventyImage.generateHTML(metadata, {
        alt: imgAlt,
        sizes: imgSize,
        loading: 'lazy',
        decoding: 'async'
      })

    }
  }


  return markdown.render(rawMarkdown)
}

export default function pluginMdToJson(params = {}) {
  const directory = params.directory || 'content'
  const markdownOptions = params.markdownOptions || {}
  markdownOptions.vite= {
    command : params.vite?.command || null,
    mode: params.vite?.mode || null,
  }
  let files = markdownFilesToData(scanFiles(`./${directory}`, ['.md']), directory, markdownOptions)
  // Grouper les fichiers par répertoire

  const virtualFileId = '@pluginMdToJson'
  return {
    name: 'plugin-md-to-json',
    resolveId(id) {
      if (id === virtualFileId) return virtualFileId
    },
    load(id) {
      if (id === virtualFileId) {
        console.log('\n——————————————————————————————————————————————')
        console.log('Convertion des fichiers Markdown')
        console.log(`Repertoire "${directory}"`)
        console.log('——————————————————————————————————————————————')
        files.forEach(f => { console.log(f.path) })
        console.log('\n')
        return `export const data = ${JSON.stringify(files)}`
      }
    }
  }
}
