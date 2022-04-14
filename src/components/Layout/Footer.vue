<template>
  <footer>
    <z-grid class="is-container">
      <section>
        <div v-html="about" />
        <Socials :links="socialLinks" class="is-left" />
      </section>
      <section>
        <h2>{{ contacts.main.name }}</h2>
        <p v-html="contacts.main.description" />
        <address>
          <p>
            <a href="mailto:{{ contacts.main.email }}">
              {{ contacts.main.email }}
            </a><br>
            <a href="tel:{{ contacts.main.phone }}">
              {{ contacts.main.phone }}
            </a>
          </p>
          <strong>{{ contacts.main.address.name }}</strong><br>
          {{ contacts.main.address.street }}<br>
          {{ contacts.main.address.zipcode }} {{ contacts.main.address.city }}<br>
          {{ contacts.main.address.country }}
        </address>
        <h3>Horaires</h3>
        {{ contacts.main.hours }}
      </section>
      <section>
        <h2>{{ contacts.secondary.name }}</h2>
        <p v-html="contacts.secondary.description" />
        <address>
          <p>
            <a href="mailto:{{contact.secondary.email}}">
              {{ contacts.secondary.email }}
            </a><br>
            <a href="tel:{{ contacts.secondary.phone }}">
              {{ contacts.secondary.phone }}
            </a>
          </p>
          <strong>{{ contacts.secondary.address.name }}</strong><br>
          {{ contacts.secondary.address.street }}<br>
          {{ contacts.secondary.address.zipcode }} {{ contacts.secondary.address.city }}<br>
          {{ contacts.secondary.address.country }}
        </address>
        <h3>Horaires</h3>
        {{ contacts.secondary.hours }}
      </section>
    </z-grid>
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
      </section>
    </z-grid>
    <FooterSub />
  </footer>
</template>
<script setup>
import Socials from '~/components/Layout/Navigation/Socials.vue'
import FooterSub from '~/components/Layout/Footer/Sub.vue'
import { computed } from 'vue'
import { footer as footerMenu, socials as _socialLinks } from '@/content/settings/navigation.json'
import { name, about, contacts, categories as _categories } from '@/content/settings/global.json'
import { useArticlesStore } from '~/store/modules/articles.js'
const articleStore = useArticlesStore()
articleStore.initialize()
const categories = computed(() => articleStore.getCategories().map(c => {
  c.text = c.name
  return c
}))

// Imposer une couleur de contraste
const socialLinks = computed(() => _socialLinks.map(l => {
  l.class = 'secondary'
  return l
}))
</script>
<style scoped>
/* Utiliser les couleurs de nuit pour le pied de page */
footer {
  /* @apply flex flex-wrap justify-between mt-4 antialiased font-light pt-12 bg-night-background text-night-text dark:bg-night-background-dark dark:text-night-text-light-dark; */
  @apply mt-4 antialiased font-light pt-12 bg-night-background text-night-text dark:bg-night-background-dark dark:text-night-text-light-dark;
}
footer h1,
footer h2,
footer :deep(h1),
footer :deep(h2),
footer :deep(h3) { @apply uppercase font-bold; }
footer :deep(h1),
footer :deep(h2),
footer :deep(h3),
footer :deep(address),
footer :deep(p) { @apply mb-4; }
footer section { @apply p-4; }
.sub-footer { @apply bg-night-background-dark text-night-text-light; }
</style>
