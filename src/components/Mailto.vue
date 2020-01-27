<template>
  <a :href="computedEmail">{{ toName }}</a>
</template>

<script>
export default {
  props: {
    toName: { type: String },
    toEmail: { type: String }
  },
  computed: {
    computedEmail() {
      return 'mailto: ' + this.toEmail;
    }
  }
}
</script>
