<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="items">
    <h1 class="items-title">{{ title }}</h1>
    <router-link
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="item"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>
<style scoped>
.items { @apply inline mr-4; }
.items-title {
  @apply inline pr-1 text-xs uppercase text-day-quiet;
  @apply dark:(text-night-text-dark);
}
.item { @apply text-sm; }
.item:not(:last-child):after { content: ", "; }
</style>
