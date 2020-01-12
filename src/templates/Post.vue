<template>
  <layout>
    <strong v-html="$static.post.title"/>

    <article>
      {{$page.dpost.id}}
      <h1 v-html="$page.dpost.title"/>
      <div v-html="$page.dpost.content"/>
    </article>
  </layout>
</template>

<static-query>
query {
  post(id: "166382b92585fe29380a84d20269931a") {
    title
  }
}
</static-query>

<page-query>
query post($path: String) {
  dpost: post(path: $path){
    id
    title
    content
  }
}
</page-query>
