/**
 * Transformer un répertoire de fichiers Markdowns
 *  en source de données avec Graymatter.
 */

import fs from "fs"
import path from "path"
import crypto from "crypto"
import matter, { GrayMatterFile } from "gray-matter"

// Il y a t-il un interêt d'étendre directement GrayMatterFile ?
// export interface GrayMatter extends GrayMatterFile<string> {}
export interface GrayMatter {
  data: {[key: string]: any}
  id: string
  path: string
  content: string
  excerpt?: string
  //
  // origin: Buffer
  // language: string
  // matter: string
  // stringify(lang: string): string
}

/**
 *
 * @param dirPath Path to content
 * @returns Array of gray matter data
 */
export function getMarkdown(dirPath: string): Array<GrayMatter> {
  console.log("====================")
  console.log("Get markdown files")
  console.log("====================")
  console.log("Get data from", dirPath)
  const paths = getPaths(dirPath) // dir paths
  const files: Array<GrayMatter> = []
  paths.forEach(p => {
    if (isMarkdownFile(p)) {
      console.log("Add file ", p)
      files.push({
        ...matter.read(p),
        id: crypto.randomUUID(),
        path: p
      })
    }
  })
  console.log("====================")
  console.log(`${files.length} files`)
  console.log("====================")
  return files
}

/**
 * Applatir les chemins
 */
function getPaths(dirPath: string) {
  let paths:string[] = []
  fs.readdirSync(dirPath)
    .forEach(p => {
      const fp = path.join(dirPath, p)
      if (fs.statSync(fp).isDirectory()) {
        paths = paths.concat(getPaths(fp))
      } else {
        paths.push(fp)
      }
    })
  return paths
}

const mdExts = [".md", ".markdown"]
function isMarkdownFile(filePath: string): boolean {
  if (fs.statSync(filePath).isDirectory()) return false
  if (!mdExts.includes(path.extname(filePath))) return false
  return true
}
