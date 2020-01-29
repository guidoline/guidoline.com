<template>
  <layout>
    <article>
      <Cover v-if="$page.post.cover" :cover="$page.post.cover"/>
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
    <aside>
      <h2>Contenus en relation</h2>
      <ul class="is-quiet">
        <li v-for="related in $page.post.related_posts" :key="related.id">
          <g-link :to="related.path">
            <h3>{{ related.title }}</h3>
            <div v-markdown="related.excerpt" />
          </g-link>
        </li>
      </ul>
    </aside>
  </layout>
</template>

<page-query>
query post($path: String) {
  post: post(path: $path){
    id
    title
    excerpt
    content
    date
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
    related_posts {
      path
      title
      excerpt
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
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>
