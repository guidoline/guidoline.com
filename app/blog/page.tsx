import Link from "next/link"
import { ModelPost } from "../../libs/model/post"

export default function Blog() {
  const posts = new ModelPost().findAll([
    "slug",
    "title"
  ])
  return (
    <main>
      <h1>Blog</h1>
      { posts.length > 0
        ?
        <ul>
        {
          posts.map(p => <li key={p.slug}>
            <Link href={p.slug}>{ p.title }</Link>
          </li>)
        }
        </ul>
        :
        <p>Aucun articles…</p>
      }
    </main>
  )
}
