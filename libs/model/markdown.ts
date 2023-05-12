/**
 * Implémentation d'un modèle de données pour
 * des fichiers de données Markdown.
 */
import { DataValues, Model, ModelValues } from "."
import { GrayMatter, getMarkdown } from "../getMarkdown"
import { basename } from "path"

/** Normalisation des données d'entrées */
export interface MarkdownData extends GrayMatter {}
/** Normalisation des données de sorties */
export interface MarkdownValue extends ModelValues {
  path: string
  slug: string
  date: Date
  title?: string | null
  excerpt?: string | null
  content?: string | null
}

export class ModelMarkdown<M extends MarkdownValue>
  extends Model<M, MarkdownData> {
  static _directory = "content"
  static _routePrefix = ""

  /**
   * Charger les ficheirs Markdown
   * @param directory Chemin vers les fchiers Markdown
   */
  constructor (directory?: string) {
    const dir = directory || ModelMarkdown._directory
    const data = getMarkdown(dir)
    super(data)
  }

  /**
   * Normaliser les données Markdown
   * @param data Données brut
   */
  normalize(data: Array<MarkdownData>): Array<M> {
    return data.map(e => {
      const slug = `${ModelMarkdown._routePrefix}${basename(e.path, ".md")}`
      return {
        path: e.path,
        id: slug,
        slug,
        date: new Date(e.data.date || null),
        title: e.data.title,
        excerpt: e.excerpt,
        content: e.content
        }
    }) as Array<M>
  }
}
