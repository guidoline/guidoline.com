<template>
  <layout>
    <article>
      <h1 v-html="$page.content.title"/>
      <div v-html="$page.content.content"/>
    </article>
  </layout>
</template>

<page-query>
query content($path: String) {
  content: content(path: $path) {
    id
    title
    content
  }
}
</page-query>
