<template>
  <div>
    <section :class="section.template" v-for="section in sections" :key="section.title">
        <h1 v-html="section.title" />
        <div v-markdown="section.content" />
    </section>
  </div>
</template>


<script>
export default {
  props: {
    sections: {
      type: Array,
    }
  }
}
</script>
