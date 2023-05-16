/**
 * Implémentation d'un modèle de données pour
 * des fichiers de données Markdown.
 */
import { Model, ModelValues } from "."
import { GrayMatter, getMarkdown } from "../getMarkdown"
import { basename } from "path"

/**
 * Les données d'entrées seront fournis par Graymatter.
 */
export interface MarkdownData extends GrayMatter {}
/**
 * Normalisation des données de sorties.
 * Cette interface pourras être étendu par des classes enfants.
 * Par exemple `ModelPost`.
 */
export interface MarkdownValues extends ModelValues {
  path: string
  slug: string
  date: Date
  title?: string | null
  excerpt?: string | null
  content?: string | null
}

export class ModelMarkdown<M extends MarkdownValues>
  extends Model<M, MarkdownData> {

  #directory
  #routePrefix

  /**
   * Charger les fichiers Markdown
   * @param directory Chemin vers les fchiers Markdown
   * @param routePrefix Prefix d'URL.
   */
  constructor (directory?: string, routePrefix?: string) {
    super()
    this.#directory= directory || "content"
    this.#routePrefix = routePrefix || ""
    // Récupérer et stocker les données
    const data = getMarkdown(this.#directory)
    console.group(`Récuperation des contenus depuis '${this.#directory}' :`)
    this.loadData(data)
    console.groupEnd()
  }

  /**
   * Normaliser les données Markdown
   * @param data Données brut
   */
  normalize(data: Array<MarkdownData>): Array<M> {
    return data.map(e => this.normalizer(e)) as Array<M>
  }

  /**
   * Ce normaliseur doit être étendu par les descendants.
   * Par exemple `ModelPost` possèderas sont propre normaliseur.
   */
  normalizer(entry: MarkdownData): MarkdownValues {
    const slug = `${this.#routePrefix || ""}${basename(entry.path, ".md")}`
    console.log(`- ${entry.path}`)
    return {
      path: entry.path,
      id: slug,
      slug,
      date: new Date(entry.data.date || null),
      title: entry.data.title,
      excerpt: entry.excerpt,
      content: entry.content
    }
  }
}
