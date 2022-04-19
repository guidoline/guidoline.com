<script setup>
// import { onMounted } from "@vue/runtime-core";

// onMounted(() => {
//   const mailjet = document.createElement('script')
//   mailjet.setAttribute('src', 'https://app.mailjet.com/statics/js/iframeResizer.min.js')
//   document.head.appendChild(mailjet)
// })
</script>
<style scoped>
iframe { @apply min-h-52; }
</style>
<template>
<iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/2xiM/MJs" width="100%"></iframe>
</template>
