import Vue from 'vue'
import unified from 'unified'
import markdown from 'remark-parse'
import markdownHtml from 'remark-html'

export function markdownify (text) {
  let result = ''
  unified()
    .use(markdown)
    .use(markdownHtml)
    .process(text, (error, output) => {
      if (error) throw error
      result = output
    })

  return result
}

const filters = { markdownify }

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
