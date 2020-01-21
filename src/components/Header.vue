<template>
  <header class="header">
    <h1>
      <g-link :to="themeURL">{{ themeName }}</g-link>
    </h1>
    <nav class="menu" v-for="link in settings.navigation.main" :key="link.url">
      <g-link class="menu-item" :to="link.url">{{ link.name }}</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true,
    }
  },
  computed: {
    themeName() { return this.settings.theme.name },
    themeURL() {
      // Ne peut pas être passé à `:to`
      return this.settings.theme.url ? this.settings.theme.url : '/'
    }
  },
  methods: {
    test() {
      // console.log("Hello")
    }
  },
  mounted() {
    this.test()
  }

}
</script>
