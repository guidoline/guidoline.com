<template>
  <div class="layout">
    <Header :settings="settings"/>
    <transition name="fade" appear>
      <main>
      <slot/>
      </main>
    </transition>
    <Footer :settings="settings"/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// https://gridsome.org/docs/body-html-attributes/#change-attributes-globally
// https://gridsome.org/docs/data-store-api/
import setting_navigation from '@/../content/settings/navigation.yml';
import setting_global from '@/../content/settings/global.yml';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      settings: {
        navigation: setting_navigation,
        global: setting_global
      }
    }
  },
  metaInfo() {
    return {
      title: setting_global.name,
      meta: [
        {
          key: "description",
          name: "description",
          content: setting_global.description
        }
      ]

    }
  }
}

</script>

<style>

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
