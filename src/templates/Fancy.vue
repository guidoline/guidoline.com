<script>
export default { name : 'TemplateBlue'}
</script>
<script setup>
import Cover from '~/components/Layout/Cover.vue'
import { stringsToURL } from '~/services/utilities.js'
//  Passer la catégorie en sur légende de la couverture
const cover = {
  supcaption: props.content.cover.supcaption ||
    props.content.category
    ? stringsToURL('/journal/categories/', [props.content.category])
        .reduce((string, link) => `${string} [${link.name}](${link.to})` , '')
    : null,
  ...props.content.cover
}

const props = defineProps({
  content: {
    type: Object,
    default: {}
  }
})

</script>
<template>
  <main class="has-cover">
    <div class="cover-wrapper">
      <div class="cover-info article-info">
        <div>
          <span class="article-info-title">Date de publication : </span>
          {{ content.date }}
        </div>
        <div>
          <span class="article-info-title">Par : </span>
          {{ content.author }}
        </div>
      </div>
      <Cover
        v-if="cover"
        :cover="cover"
        class="is-full"
      />
    </div>
    <div class="article-wrapper">
        <div class="article">
          <slot/>
          <div class="article-info">
            <div>
              <span class="article-info-title">Étiquettes : </span>
              <span class="tags">
                <template
                  v-for="(tag, index) in content.tags"
                  :key="index"
                >
                  <a href="#">{{ tag }}</a>
                </template>
              </span>
            </div>
            <div v-if="content.license">
              <span class="article-info-title">Licence : </span>
              <a :href="content.license.href">{{ content.license.name }}</a>
            </div>
          </div>
        </div>
        <aside class="article-aside">
          <h2>Aside</h2>
          <details><pre>{{ content }}</pre></details>
        </aside>
    </div>
  </main>
</template>
<style scoped>
/* .fancy { @apply bg-primary-500 text-white p6; } */
.cover-wrapper { @apply relative h-100vh min-h-84; }
.cover-info { @apply absolute flex flex-wrap justify-between z-1 left-4 bottom-4 right-4; }
/* - None	width: 100%;
- sm (640px)	max-width: 640px;
- md (768px)	max-width: 768px;
- lg (1024px)	max-width: 1024px;
- xl (1280px)	max-width: 1280px;
- 2xl (1536px)	max-width: 1536px; */
.article-wrapper {
  @apply fancy p-4
    max-w-50ch mx-auto
    sm:(bg-red-100)
    md:(bg-red-200 max-w-full grid pt-12 gap-4 grid-cols-3)
    lg:(bg-red-300 )
    xl:(bg-red-400 )
    2xl(bg-red-500 )
    ;
  /* prose lg:prose-xl col-span-3 col-start-2 */
}
.article-wrapper {
  @apply prose-sm
    sm:prose
    md:prose-lg
    lg:prose-xl
    xm:prose-2xl
    2xl:prose-3xl;
}
.article {
  @apply
    md:col-span-2;
}
.aticle-aside {
  @apply;
}
.article-info-title { @apply uppercase text-xs text-gray-400; }
.article-info { @apply p-4 bg-white text-sm text-gray-500 font-light; }
.tags a:not(:last-child):after {
  content: ", ";
}
</style>
