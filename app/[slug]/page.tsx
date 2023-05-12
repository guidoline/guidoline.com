/**
 * Route dynamique
 *
 * Route handler à utiliser avec App Router (Next 13)
 *
 * Documentation :
 * https://nextjs.org/docs/app/building-your-application/routing/router-handlers
 * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
 */

import notFound from "../not-found"
import { ModelMarkdown } from "../../libs/model/markdown"
import mdToHtml from "../../libs/mdToHtml"

type Props = {
  params: {
    slug: string
  }
}

// Documentation sur les paramètres statiques
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const slugs = new ModelMarkdown().findAll(["slug"])
  return slugs.map(s => ({ slug: s.slug }))
}

// Data from API ?
export const metadata = {
  title: "Next JS 13",
  description: "Some description"
}

export default async function Page({ params }: Props) {
  const page = new ModelMarkdown().find(params.slug, [
    "path",
    "title",
    "content"
  ])

  if (!page) return notFound()
  const content = await mdToHtml(page.content || "")
  console.log("content ", page)
  // const { data } = await getPage(slug)
  // const settings = JSON.parse(data)
  // console.log("DATA FROM API ", settings)
  // if (slug !== "mentions-legales") return <ErrorPage statusCode={404} />
  // à  tester
  // metadata.title = data.title
  // metadata.description = data.description

  return (
    <main>
      <h1>{page.title}</h1>
      {page.content &&
        <div dangerouslySetInnerHTML={{__html:content}} />
      }
    </main>
  )
}
