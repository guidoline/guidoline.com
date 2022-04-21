<script setup>
defineProps({
  pagination: {
    type: Object,
    required: true
  },
  linkClasses: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <section>
    <z-grid>
      <z-button
        v-if="pagination.previous"
        :to="pagination.previous.to"
        icon="ChevronLeft"
        class="compact"
        :class="linkClasses"
      >
        {{ pagination.previous.name }}
      </z-button>
      <z-button
        v-if="pagination.next"
        :to="pagination.next.to"
        icon-right="ChevronRight"
        class="compact sm:float-right"
        :class="linkClasses"
      >
        {{ pagination.next.name }}
      </z-button>
    </z-grid>
  </section>
</template>
