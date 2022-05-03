---
title: Documentation

---
# Documentation gestion éditoriale

Document de référence pour la gestion des contenu éditoriaux.

\[\[TOC\]\]

## Le table des matières

Une table des matières peut être généré automatiquement à partir des liens le second et troisième niveau (`##` et `###` au foramt Markdown,`<h2>` et `<h3>` au format HTML).

Pour générer une table de matière, insérer le code suivant :

    [[TOC]]

## Les images

Comment organiser et faire les meilleurs choix de dimensions et de format.

### Format

Pour les images à afficher sur les site :

* photos et illustration complexe : webp ou jpg ;
* illustrations simple (illustration au trait, n&b ou peu de couleur) : gif.

⚠️  le choix du format est crucial pour le poids du fichier. Par exemple, voici les poids pour un fichier aux dimension 4/3 (787 × 590 pixels) :

* png : 442 Ko ;
* gif : 217 Ko ;
* jpg : 135 Ko ;
* webp : 57 Ko.

Détails des formats:

* [webp](https://fr.wikipedia.org/wiki/WebP) format moderne le plus performant, idéal pour les photos (destructif);
* [jpg](https://fr.wikipedia.org/wiki/JPEG) pour les photos (destructif);
* [png](https://fr.wikipedia.org/wiki/Portable_Network_Graphics) idéal pour les illustrations et les photos très contrastées. Attention à bien optimiser, ce format peut être un peu lourd (non destructif);
* [gif](https://fr.wikipedia.org/wiki/Graphics_Interchange_Format) parfait pour de petites images avec peu de couleurs (256 couleurs max.) (non destructif);

### Dimensions

* couverture : 1280 × 460 ;
* contenu : 787 pixels de large, hauteur libre, ratio conseillé 4/3 (787 × 590 pixels) ;
* Section de page d'accueil : 450 pixels de large, hauteur libre, ratio conseillé 4/3 (450 × 338 pixels)

### Nommage

Il est recommander de prendre soin du nommage des fichiers. Cela vous permettras de retrouver vos images facilement via le moteur de recherche du CMS.

N'utiliser pas de majuscules et de caractères spéciaux (autre que le tiret séparateur « `-` ») dans le noms des fichier.

Essayer de nommer l'image de façon descriptive plutôt que par son usage.

👎  Exemple à éviter :

* `Sans-titre-9-e1638357065848.png` ;
* `Story-1-02-1.png` ;
* `u6kxj-copie.jpg`.

👍  Exemple recommandés :

* `decoration-de-noel-velo-dans-sapin.jpg` ;
* `story-nocturne-2021-10-29.png` ;
* `couverture-newsletter-fevrier-2019.jpg`.

## Vidéos

Les vidéos doivent être hébergées sur des plateformes de diffusion tierces (Youtube, Vimeo, etc.).

L'intégration la plus saine est de saisir soit même l'iframe d'intégration et de personnaliser l'identifiant de la vidéo.

### Iframe Vimeo

Pour l'intégration d'une vidéo Vimeo, veuillez saisir le code suivant :

    <iframe
      src="https://player.vimeo.com/video/[videoID]?color=EA4848&portrait=0"
      width="100%"
      height="349"
      frameborder="0"
      allow="fullscreen; picture-in-picture"></iframe>

Vous devez personnaliser le paramètre `[videoID]` par l'identifiant de la video. L'identifiant de la vidéo est disponible dans la barre d'adresse de la vidéo à la fin de l'url.

Par exemple, pour cette vidéo : [https://vimeo.com/14419945](https://vimeo.com/14419945), l'identifiant est `14419945`. À intégrer de cette manière :

    <iframe
      src="https://player.vimeo.com/video/14419945?color=EA4848&portrait=0"
      width="100%"
      height="349"
      frameborder="0"
      allow="fullscreen; picture-in-picture"></iframe>

Ce qui donne :

<iframe src="https://player.vimeo.com/video/14419945?color=EA4848&portrait=0" width="100%" height="349" frameborder="0" allow="fullscreen; picture-in-picture"></iframe>

### Iframe Youtube

Pour l'intégration d'une vidéo Youtube, saisissez le code suivant :

    <iframe
      width="100%"
      height="315"
      src="https://www.youtube-nocookie.com/embed/[videoID]"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

Personnaliser la portion `[videoID` par l'identifiant de la vidéo. L'identifiant d'une vidéo Youtube est situé dans l'url juste après le paramètre `?v=`.

Par exemple, pour la vidéo [https://www.youtube.com/watch?v=o93jIJ1_zWE](https://www.youtube.com/watch?v=o93jIJ1_zWE) l'identifiant est `o93jIJ1_zWE`, à insérer de cette manière :

    <iframe
      width="100%"
      height="315"
      src="https://www.youtube-nocookie.com/embed/[videoID]"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

Ce qui donneras :

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/o93jIJ1_zWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>