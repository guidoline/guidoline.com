<template>
  <footer>
    <section>
      <h2>Navigation</h2>
      <z-menu
        :links="footerMenu"
        :is-vertical="true"
        :is-compact="true"
        type="text"
      />
    </section>
    <section>
      <h2>Catégories</h2>
      <z-menu
        :links="categories"
        :is-vertical="true"
        :is-compact="true"
        type="text"
      />
      <h2>Dates</h2>
<pre>
Articles par date :
2021
2020
2019
[…]
Chaque année affiche la liste des mois :
/journal/2021
Décembre
- article 12
- article 11
- article 10
- article 9
[…]
Novembre
- article 21
- article 20
- article 19
[…]
</pre>
    </section>
    <section>
      <h2>Sitemap</h2>
      <z-menu :links="sitemap" type="text" :is-vertical="true"/>
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
    <section class="sub-footer">
      <slot name="subfooter"/>
    </section>
  </footer>
</template>
<script setup>
import { footer as footerMenu } from '@/content/settings/navigation.json'
import { name, about, contacts, categories as _categories } from '@/content/settings/global.json'
// import u from '~/services/utilities.js'
import { slugify, stringsToURL } from '~/services/utilities'
// console.log(u.slugify)
import { computed } from 'vue'
import { useRouter } from 'vue-router'
// const categories = computed(() => _categories.map(c => ({
  // name: c,
  // slug: u.slugify(c)
// })))
const categories = stringsToURL('/journal/categories/', _categories)
const sitemap = useRouter().getRoutes()
  .filter(r => {
    if (!r.name) return false
    if (r.name.startsWith('journal-')) return false
    return true
  })
  .map(r => ({
    name: r.name,
    to: r.path
  }))
</script>
<style scoped>
/*  @todo: peut-être utilisé une grille afin d'avoir un colonnage
homogène… */
footer {
  @apply flex flex-wrap justify-between
  bg-coolGray-700 text-coolGray-100 antialiased font-light pt-12
}
footer section { @apply p-4 }
footer section.sub-footer { @apply w-full text-xs italic bg-coolGray-800 text-coolGray-200 }
</style>
