<template>
  <layout>
    <article>
      <Cover :cover="$page.post.cover"/>
      <h1 v-html="$page.post.title"/>
      <div v-html="$page.post.content"/>
      <footer>
        <p>
          Le {{ $page.post.date }}
          <span v-if="$page.post.author">Écrit par <Mailto :toEmail="$page.post.author.email" :toName="$page.post.author.title"/>
          </span>
        </p>
        <p>Étiquettes : </p>
        <ul v-for="tag in $page.post.tags" :key="tag.id">
            <li>
              <g-link :to="tag.path">{{ tag.title }}</g-link>
            </li>
        </ul>
      </footer>
    </article>
  </layout>
</template>

<page-query>
query post($path: String) {
  post: post(path: $path){
    id
    title
    content
    date
    category
    tags {
      title
      id
      path
    }
    path
    author {
      title
      email
    }
    cover {
      src
      alt
      legend
    }
  }
}
</page-query>

<script>
import Cover from '@/components/Cover'
import Mailto from '@/components/Mailto'

export default {
  components: {
    Cover,
    Mailto
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
