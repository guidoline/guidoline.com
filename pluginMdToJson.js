import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'
import MarkdownIt from 'markdown-it'

// Scan de fichiers recursif
function scanFiles(directory, extensions, paths) {
  const files = fs.readdirSync(directory)
  paths = paths || []

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
    quotes: ['«\x40', '\x40»', '<\x40', '\x40>'],
    ...options
  })
  return markdown.render(rawMarkdown)
}

export default function pluginMdToJson(params = {}) {
  const directory = params.directory || 'content'
  const markdownOptions = params.markdownOptions || {}
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
        files.forEach(f => { console.log(f.path) })
        console.log('\n')
        return `export const data = ${JSON.stringify(files)}`
      }
    }
  }
}
