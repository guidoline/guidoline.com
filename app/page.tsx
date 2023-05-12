/**
 * Page d'accueil
 *
 * Note au sujet de "App Router": le nouveau paradigme de fichier de next13
 * exploite "React Server Components" afin d'améliorer les performances.
 *
 * Un **repertoire** définie une route et doit posséder une fichier `page.tsx`
 * Les **fichiers** sont utilisées pour créer les élement d'UI pour le segment
 * de route.
 *
 * Documentation : https://nextjs.org/docs/app/building-your-application/routing
 */

import mdToHtml from "../libs/mdToHtml"
import { ModelMarkdown } from "../libs/model/markdown"
import NotFound from "./not-found"

// Personnaliser les métadonnées
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// Les favicons peuvent être automatisés.
export const metadata = {
  title: "Next JS 13",
  description: "Some description"
}

export default async function Home() {
  const page = new ModelMarkdown().find("index", [
    "title",
    "content"
  ])
  if (!page) return NotFound()
  const content = await mdToHtml(page.content || "")
  return (
    <main>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{__html:content}} />
    </main>
  )
}
