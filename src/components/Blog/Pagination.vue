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
      <div v-if="pagination.previous">
        <z-button
          :to="pagination.previous.to"
          icon="ChevronLeft"
          class="compact"
        >
          {{ pagination.previous.name }}
        </z-button>
      </div>
      <div v-if="pagination.next">
        <z-button
          :to="pagination.next.to"
          icon-right="ChevronRight"
          class="compact sm:float-right"
        >
          {{ pagination.next.name }}
        </z-button>
      </div>
    </z-grid>
  </section>
</template>
