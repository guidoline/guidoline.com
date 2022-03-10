<style scoped>
/* Note:
 * Pour le moment, ne pas utiliser de librairie externe, utiliser des
 * composants locaux avec WindicCSS. Ils pourrons êtres converties en
 * composants externes plus tard.
 */
h1 { @apply tracking-wide; }
/* No preflight */
/*  Preset : z-title-weight z-title-text-size z-title-margin */
/*  ou CSS vanilla : cf. z-components/layout/inset.vue */
h1 { @apply bold text-4xl mb-8; }
/* Custom part */
h1 { @apply text-center pt-8 font-serif italic text-shadow-sm; }
@screen md {
  h1:before,
  h1:after { content: " — "; @apply font-thin ; }
}
</style>
<template>
  <h1>
    <slot />
  </h1>
</template>
