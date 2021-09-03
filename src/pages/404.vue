<template>
  <layout>
    <h1>Page non trouvée</h1>
    <blockquote>
      <p>
        La ressource « {{ $route.path }} » que vous demandez n'a pu être trouvée.
      </p>
      <cite><a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/404">Réponse HTTP 404</a></cite>
    </blockquote>
    <div>
      <h2>Chercher sur le site</h2>
      <Searchbox :terms="$route.path" />
    </div>
    <p>
      Vous pouvez également explorer le contenu de notre site à partir de la
      <g-link to="/">
        page d'accueil
      </g-link>.
    </p>
  </layout>
</template>
<script>
import Searchbox from '@/components/Searchbox.vue'
export default {
  name: 'HTTP404Page',
  components: { Searchbox }
  // Todo : ajouter le mixin de métainfo
}
</script>
