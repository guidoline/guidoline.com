<script setup>
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  const rdv = document.createElement('script')
  rdv.setAttribute('type', 'text/javascript')
  rdv.setAttribute('src', 'https://www.rdv360.com/widget/dist/app_vuidget.js')
  document.head.appendChild(rdv)
  const rdvLink = document.createElement('link')
  rdvLink.setAttribute('rel', 'stylesheet')
  rdvLink.setAttribute('href', 'https://www.rdv360.com/widget/dist/app.css')
})

</script>
<template>
<client-only>
  <vue-widget apikey="337ea9d23a5762483a9a83226ce56d9a634ac12c" apisecret="a703dd86d700f82ee2e9396fd43a1f3371f6d7c1" ></vue-widget>
</client-only>
</template>
