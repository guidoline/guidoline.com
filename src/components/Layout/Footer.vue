<template>
  <footer>
    <z-grid class="is-container">
      <section>
        <h2>Navigation</h2>
        <z-menu
          :links="footerMenu"
          :is-vertical="true"
          :is-compact="true"
          type="text"
          linkClasses="light text"
        />
      </section>
      <section>
        <h2>Catégories</h2>
        <z-menu
          :links="categories"
          :is-vertical="true"
          :is-compact="true"
          type="text"
          linkClasses="light text"
        />
        <h2>Dates</h2>
        <z-menu
          :links="years"
          :is-vertical="true"
          :is-compatc="true"
          type="text"
          linkClasses="light text"
        />
      </section>
      <section>
        <h2>Sitemap</h2>
        <z-menu :links="sitemap" type="text" :is-vertical="true" linkClasses="light text"/>
      </section>
      <section>
        <h1>{{name}}</h1>
        <div v-html="about" />

        <h2>{{ contacts.main.name }}</h2>
        <div v-html="contacts.main.description" />
        <address>
          {{ contacts.main.email }}<br>
          <strong>{{ contacts.main.address.name }}</strong><br>
          {{ contacts.main.phone }}<br>
          {{ contacts.main.address.street }}<br>
          {{ contacts.main.address.zipcode }} {{ contacts.main.address.city }}<br>
          {{ contacts.main.address.country }}
        </address>
        <h3>Horaires</h3>
        {{ contacts.main.hours }}
      </section>
    </z-grid>
    <section class="sub-footer">
      <slot name="subfooter"/>
    </section>
  </footer>
</template>
<script setup>
import { computed } from 'vue'
import { footer as footerMenu } from '@/content/settings/navigation.json'
import { name, about, contacts, categories as _categories } from '@/content/settings/global.json'
import { useContentsStore } from '~/store/modules/contents.js'
import { useArticlesStore } from '~/store/modules/articles.js'
const articleStore = useArticlesStore()
articleStore.initialize()
const categories = computed(() => articleStore.getCategories())
const years = computed(() => Object.keys(articleStore.articlesByDate()).map(d => ({ name: d, slug: d, to: `/journal/archives/${d}` })).reverse())
const contentStore = useContentsStore()
contentStore.initialize()
const sitemap = contentStore.pages
  .map(r => ({
    name: r.title || r.name,
    to: r.path
  }))
</script>
<style scoped>
/* Utiliser les couleurs de nuit pour le pied de page */
footer {
  @apply flex flex-wrap justify-between mt-4 antialiased font-light pt-12 bg-night-background text-night-text dark:bg-night-background-dark dark:text-night-text-light-dark;
}
footer h1,
footer h2  { @apply uppercase font-bold; }
footer section { @apply p-4; }
footer section.sub-footer { @apply w-full text-xs italic bg-night-background-dark text-night-text-light; }
</style>
