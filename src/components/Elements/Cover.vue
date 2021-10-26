<template>
  <figure
    v-if="cover.src"
    class="cover"
  >
    <g-image
      v-if="cover.src"
      :src="cover.src"
      :alt="cover.alt"
      class="cover-image"
    />
    <figcaption
      v-if="cover.legend"
      class="cover-caption"
      v-html="$options.filters.markdownify(cover.legend)"
    />
  </figure>
</template>

<script>
/**
 * Couverture avec légende.
 */
export default {
  name: 'Cover',
  props: {
    cover: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.cover {
  position: relative;
  height: calc(80vh - calc(var(--gap) * 2));
  overflow: hidden;

  &.is-layered::after {
    position: absolute;
    top: 0;
    /* right: 0; */
    bottom: 0;
    /* left: 50%; */
    left: 0;
    z-index: 1;
    /* background-color: var(--color-primary); */
    /* mix-blend-mode: hue; useless*/
    /* opacity: 0.7; */
    /* mix-blend-mode: hard-light; */
    /* mix-blend-mode: overlay; */
    /* Effet B */
    /* mix-blend-mode: color; */
    /* END Effet B */
    content: "";
    width: 100%;
    /* width: 75%; */
    /* transform: skew(-15deg)
              translateX(-50%); */
  }
  &.is-layered.back {
    background-color: var(--color-primary);
  }
  &.is-layered.back img {
    /* mix-blend-mode: multiply; */
    /* mix-blend-mode: hue; */
    /* mix-blend-mode: hard-light; */
    /* filter: saturate(10) brightness(1.2) grayscale(1) blur(3px); */
    /* filter: saturate(0) brightness(60%) grayscale(1) blur(0px); */
    /* Effet B */
    filter: grayscale(1);
    /* END Effet B */
  }
  &.is-layered > * { z-index: 2; }
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-caption {
  position: absolute;
  bottom: var(--gap);
  margin-bottom: 0;
  padding: var(--gap) var(--gap) var(--gap) var(--gap-demi);
  /* background-color: rgba(255, 255, 255, 0.6); */
  background: white;
  /* mix-blend-mode: lighten; */
  & p:last-child { margin-bottom: 0;}
}

/* from https://codepen.io/vailjoy/details/OWVwvO */

.green{
  background-color: #00ff36;
}
.green img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(1.2);
  filter: grayscale(100%) contrast(1);
}
.green::after{
  background-color: #23278a;
  mix-blend-mode: lighten;
}

.red-purple{
  background-color: #e41c2d;
}
.red-purple img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(1);
  filter: grayscale(100%) contrast(.8);
}
.red-purple::after{
  background-color: #1d3162;
  mix-blend-mode: lighten;
}


.retro{
background-color: #f1e3a0;
}
.retro img{
   mix-blend-mode: darken;
  -webkit-filter: grayscale(100%) contrast(2);
  filter: grayscale(100%) contrast(2);
}
.retro::after{
  background: linear-gradient(180deg, #f430a9, #f2e782);
  mix-blend-mode: lighten;
}

.vintage{
  background-color: #caeaf2;
}
.vintage img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(1.5);
  filter: grayscale(100%) contrast(1.5);
}
.vintage::after{
  background-color: #2cd6e1;
  mix-blend-mode: lighten;
}

.blue-light{
  background-color: #181e59;
}
.blue-light img{
   mix-blend-mode: lighten;
  -webkit-filter: grayscale(100%) contrast(.8);
  filter: grayscale(100%) contrast(.8);
}
.blue-light::after{
  background-color: #E7E1A6;
  mix-blend-mode: multiply;
}

.blue{
  background-color: #77acd4;
}
.blue img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(1.2);
  filter: grayscale(100%) contrast(1.2);
}
.blue::after{
  background-color: #033dc5;
  mix-blend-mode: lighten;
}


.dark-red{
  background-color: #ed060b;
}
.dark-red img{
    -webkit-filter: grayscale(100%) contrast(1.2);
    filter: grayscale(100%) contrast(1.2);
    mix-blend-mode: lighten;
}
.dark-red::after{
   background-color: #70e4ee;
   mix-blend-mode: multiply;
}

.flat-retro{
  background-color: #FCA300;
}
.flat-retro img{
   mix-blend-mode: darken;
  -webkit-filter: grayscale(100%) contrast(1.5);
  filter: grayscale(100%) contrast(1.5);
}
.flat-retro::after{
   background-color: #e23241;
  mix-blend-mode: lighten;
}

.teal{
  background-color: #d7a621;
}
.teal img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(1.2);
  filter: grayscale(100%) contrast(1.2);
}
.teal::after{
  background-color: #0c6249;
  mix-blend-mode: lighten;
}

.purple{
  background-color: #88169d;
}
.purple img{
  -webkit-filter: grayscale(100%) contrast(1.2);
    filter: grayscale(100%) contrast(1.2);
  mix-blend-mode: lighten;
}
.purple::after{
  mix-blend-mode: hard-light;
  background: linear-gradient(to top left, #75d775, #321a5b);
}

.pink{
  background-color: #FCA300;
}
.pink img{
  mix-blend-mode: darken;
}
.pink::after{
  background: #282581;
  mix-blend-mode: lighten;
  -webkit-filter: contrast(1.1);
  filter: contrast(1.1);
}



.yellow{
  background-color: #e0de2c;
}
.yellow img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(.8);
  filter: grayscale(100%) contrast(.8);
}
.yellow::after{
  background-color: #b71310;
  mix-blend-mode: lighten;
}

.orange{
  background-color: #f65e35;
}
.orange img{
   mix-blend-mode: multiply;
  -webkit-filter: grayscale(100%) contrast(1.2);
  filter: grayscale(100%) contrast(1.2);
}
.orange::after{
  background-color: #1e3265;
  mix-blend-mode: lighten;
}

.blue-red{
  background-color: #E50914;
}
.blue-red img{
  -webkit-filter: grayscale(100%) contrast(1.2);
    filter: grayscale(100%) contrast(1.2);
  opacity:.8;
}
.blue-red::after{
   mix-blend-mode: lighten;
    -webkit-filter: contrast(1.1);
    filter: contrast(1.1);
  background-color: #282581;
}

.gold{
  background-color: #367ABD ;
}
.gold img{
   mix-blend-mode: lighten;
  -webkit-filter: grayscale(100%) contrast(1);
  filter: grayscale(100%) contrast(.8);
}
.gold::after{
  background-color: #F9ED3A;
  mix-blend-mode: multiply;
}




/** Customisation **/
/* Flat-retro */
/* .test{
background-color: white;
}
.test img{
   mix-blend-mode: darken;
  filter: grayscale(100%) contrast(1.5);
}
.test::after{
  background: var(--color-primary);
  mix-blend-mode: lighten;
} */
/* tail */
/* .test{
background-color: var(--color-primary-light);
}
.test img{
   mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1.5);
}
.test::after{
  background: var(--color-primary);
  mix-blend-mode: lighten;
} */
/* .test{
background-color: var(--color-secondary-light);
background-color: white;
}
.test img{
   mix-blend-mode: darken;
  filter: grayscale(100%) contrast(1.5);
}
.test::after{
  background: var(--color-primary-dark);
  mix-blend-mode: lighten;
} */
/* retro */
.test{
background-color: var(--color-secondary-light);
padding: var(--gap);
/* margin: calc(-1 * var(--gap)); */
margin-top: 0;
}
.test img{
  mix-blend-mode: darken;
  filter: grayscale(100%) contrast(2);
}
.test::after{
  background: var(--color-primary-dark);
  mix-blend-mode: lighten;
}
</style>
