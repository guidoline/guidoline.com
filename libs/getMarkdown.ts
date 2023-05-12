/**
 * Transformer un répertoire de fichiers Markdowns
 *  en source de données avec Graymatter.
 */

import fs from "fs"
import path from "path"
import crypto from "crypto"
import matter, { GrayMatterFile } from "gray-matter"

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

export function getMarkdown(dirPath: string): Array<GrayMatter> {
  return fs
    .readdirSync(dirPath)
    .filter(f => isMarkdownFile(path.join(dirPath, f)))
    .map(f => ({
      ...matter.read(path.join(dirPath, f)),
      id: crypto.randomUUID(),
      path: f
    }))
}

const mdExts = [".md", ".markdown"]
function isMarkdownFile(filePath: string): boolean {
  if (fs.statSync(filePath).isDirectory()) return false
  if (!mdExts.includes(path.extname(filePath))) return false
  return true
}
