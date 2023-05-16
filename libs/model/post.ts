import { MarkdownData, MarkdownValues, ModelMarkdown } from "./markdown";

export interface PostData extends MarkdownData {}
export interface PostValues extends MarkdownValues {
  // Ajouter des données spécifiques aux post.
  author: string // example
}

export class ModelPost extends ModelMarkdown<PostValues> {

  constructor() {
    // @todo : Ajouter un scan de répertoire récursif à
    // `libs/getMarkdown.ts`.
    super("content/blog", "/blog", true)
  }
  // Extends normalizer
  normalizer(entry: MarkdownData): PostValues {
      const e = super.normalizer(entry)
      return {
        ...e,
        author: entry.data.author
      }
  }
}
