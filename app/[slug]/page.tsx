/**
 * Route dynamique
 *
 * Documentation :
 * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
 */

import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

// Documentation sur les paramètres statiques
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generatedStaticParams() {
  // Juste pour l'exemple.
  // Devras être généré à partir de données API data.
  return [
    { slug: "mentions-legales" }
  ]
}

export default function Page({ params }: Props) {
  const { slug } = params
  if (slug !== "mentions-legales") return notFound()
  return (
    <main>
      <pre>SOME PAGE ({slug})</pre>
    </main>
  )
}
