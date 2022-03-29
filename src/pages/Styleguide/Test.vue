<script setup>
import ContainerProse from '~/components/Layout/Container/Prose.vue'
</script>
<template>
  <LayoutDefault :content="content">
    <ContainerProse>
      <h1>Composants de base</h1>
      <p>Démonstration des composants de base.</p>
      <h2>Sommaire</h2>
      <ul>
        <li><a href="#boutons">Boutons</a></li>
      </ul>
      <h2 id="boutons">Boutons</h2>
      <h3>Types</h3>
      <z-button>Bouton par défaut</z-button>
      <z-button filled>Bouton filled</z-button>
      <z-button outline>Bouton outline</z-button>
      <h3>Couleurs</h3>
      <z-button>Bouton par défaut</z-button>
      <z-button filled>Bouton filled</z-button>
      <z-button outline>Bouton outline</z-button>
      <h3>Couleurs</h3>
      <z-button>Bouton par défaut</z-button>
      <z-button filled>Bouton filled</z-button>
      <z-button outline>Bouton outline</z-button>

    </ContainerProse>
  </LayoutDefault>
</template>
