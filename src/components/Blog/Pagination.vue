<script setup>
defineProps({
  pagination: {
    type: Object,
    required: true
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
      >
        {{ pagination.previous.name }}
      </z-button>
      <z-button
        v-if="pagination.next"
        :to="pagination.next.to"
        icon-right="ChevronRight"
        class="compact sm:float-right"
      >
        {{ pagination.next.name }}
      </z-button>
    </z-grid>
  </section>
</template>
