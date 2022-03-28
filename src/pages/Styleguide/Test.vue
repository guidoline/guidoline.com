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
      <h3>Type</h3>
      <z-button>Bouton par défaut</z-button>
      <z-button filled>Bouton filled</z-button>
      <z-button outline>Bouton outline</z-button>
      <h3>Couleur label</h3>
      <z-button label>Bouton par défaut label</z-button>
      <z-button text label>Bouton text label</z-button>
      <z-button tonal label>Bouton tonal label</z-button>
      <z-button filled label>Bouton filled label</z-button>
      <z-button outline label>Bouton outline label</z-button>
      <z-button elevated label>Bouton elevated label</z-button>
      <h3>Couleur light</h3>
      <z-button light>Bouton par défaut light</z-button>
      <z-button text light>Bouton text light</z-button>
      <z-button tonal light>Bouton tonal light</z-button>
      <z-button filled light>Bouton filled light</z-button>
      <z-button outline light>Bouton outline light</z-button>
      <z-button elevated light>Bouton elevated light</z-button>
      <h3>Couleur dark</h3>
      <z-button dark>Bouton par défaut dark</z-button>
      <z-button text dark>Bouton text dark</z-button>
      <z-button tonal dark>Bouton tonal dark</z-button>
      <z-button filled dark>Bouton filled dark</z-button>
      <z-button outline dark>Bouton outline dark</z-button>
      <z-button elevated dark>Bouton elevated dark</z-button>
      <h3>Couleur success</h3>
      <z-button success>Bouton par défaut success</z-button>
      <z-button text success>Bouton text success</z-button>
      <z-button tonal success>Bouton tonal success</z-button>
      <z-button filled success>Bouton filled success</z-button>
      <z-button outline success>Bouton outline success</z-button>
      <z-button elevated success>Bouton elevated success</z-button>
      <h3>Couleur danger</h3>
      <z-button danger>Bouton par défaut danger</z-button>
      <z-button text danger>Bouton text danger</z-button>
      <z-button tonal danger>Bouton tonal danger</z-button>
      <z-button filled danger>Bouton filled danger</z-button>
      <z-button outline danger>Bouton outline danger</z-button>
      <z-button elevated danger>Bouton elevated danger</z-button>
      <h3>Couleur fab</h3>
      <z-button fab>Bouton par défaut fab</z-button>
      <z-button text fab>Bouton text fab</z-button>
      <z-button tonal fab>Bouton tonal fab</z-button>
      <z-button filled fab>Bouton filled fab</z-button>
      <z-button outline fab>Bouton outline fab</z-button>
      <z-button elevated fab>Bouton elevated fab</z-button>
      <h3>Couleur gradient</h3>
      <z-button gradient>Bouton par défaut gradient</z-button>
      <z-button text gradient>Bouton text gradient</z-button>
      <z-button tonal gradient>Bouton tonal gradient</z-button>
      <z-button filled gradient>Bouton filled gradient</z-button>
      <z-button outline gradient>Bouton outline gradient</z-button>
      <z-button elevated gradient>Bouton elevated gradient</z-button>
      <h3>Couleur fancy</h3>
      <z-button fancy>Bouton par défaut fancy</z-button>
      <z-button text fancy>Bouton text fancy</z-button>
      <z-button tonal fancy>Bouton tonal fancy</z-button>
      <z-button filled fancy>Bouton filled fancy</z-button>
      <z-button outline fancy>Bouton outline fancy</z-button>
      <z-button elevated fancy>Bouton elevated fancy</z-button>
    </ContainerProse>
  </LayoutDefault>
</template>
