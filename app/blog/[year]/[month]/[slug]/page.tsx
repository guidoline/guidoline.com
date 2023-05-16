import mdToHtml from "@/libs/mdToHtml"
import { ModelPost } from "@/libs/model/post"
import notFound from "@/app/not-found"

type Props = {
  params: {
    year: string
    month: string
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = new ModelPost().findAll(["slug"])
  return slugs.map(s => ({ slug: s.slug }))
}

export default async function Blog({ params }: Props) {
  const slug = `/blog/${params.year}/${params.month}/${params.slug}`
  console.log("Find post ", slug)
  const post = new ModelPost().find(slug, [
    "slug",
    "title",
    "content"
  ])

  if (!post) return notFound()
  const content = await mdToHtml(post.content || "")

  return (
    <main>
      <h1>{ post.title }</h1>
      <div dangerouslySetInnerHTML={{__html: content }} />
    </main>
  )
}
