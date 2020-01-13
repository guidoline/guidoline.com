<template>
  <layout>
    <article>
      <h1 v-html="$page.dpost.title"/>
      <div v-html="$page.dpost.content"/>
    </article>
  </layout>
</template>

<page-query>
query post($path: String) {
  dpost: post(path: $path){
    id
    title
    content
  }
}
</page-query>
