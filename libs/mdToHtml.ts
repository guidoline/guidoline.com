import { remark } from "remark"
import html from "remark-html"

export default async function mdToHtml(markdown: string) {
  const r = await remark().use(html).process(markdown)
  return r.toString()
}
