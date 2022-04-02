<template>
  <div :class="{'loading-container': true, loading: isLoading}">
    <div class="loader" :style="{ width: progress + '%' }">
      <div class="light"></div>
    </div>
  </div>
</template>
<script setup>
/**
 * Usage avec le store :
 * 1. définir un store global `rootStore.state.loading`
 * 2. initialiser dans `main.js beforeEach` : `useRootStore.loading = true`
 * 3. interrompre dans `main.js beforeEesolve` : `useRootStore.loading = false`
 *
 * @cf usage de `inject` https://github.com/aacassandra/vue3-progressbar
 * @todo à refactorer
 */

import { ref, onMounted } from 'vue'
import { useRootStore } from '~/store/modules/root'
const rootStore = useRootStore()
const duration = 8000
const interval = 500
const startingPoint = 0
const endingPoint = 90
const isLoading = ref(true)
const progress = ref(startingPoint)
const timeoutId = ref('')

const start = () => {
  isLoading.value = true
  progress.value = startingPoint
  loop()
}

const loop = () => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }
  if (progress.value >= endingPoint) {
    return
  }
  const size = (endingPoint - startingPoint) / (duration / interval)
  const p = Math.round(progress.value + Math.random() * size)
  progress.value = Math.min(p, endingPoint)
  timeoutId.value = setTimeout(
    loop,
    Math.random() * interval
  )
}

const stop = () => {
  progress.value = 100
  clearTimeout(timeoutId.value)
  const ending = setTimeout(() => {
    isLoading.value = false
    clearTimeout(ending)
  }, 500)
}

onMounted(() => {
  if (rootStore.loading) start()
  if (!rootStore.loading) stop()
})

rootStore.$subscribe((mutation, state) => {
  if (state.loading) start()
  if (!state.loading) stop()
})

</script>
<style scoped>
.loading-container {
  @apply text-[0] fixed order-first top-0 left-0 h-1 w-full;
  @apply hidden;
  @apply transition-opacity duration-200;
}

.loading-container.loading { @apply block; }

.loader {
  @apply bg-gradient-to-r from-main-accent via-main-primary to-main-secondary;
  @apply inline-block h-full w-[50%] ;
  @apply transition-width duration-200 ease-out;
}

.loader > .light {
  @apply float-right h-full w-[20%];
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: loading-animation 2s ease-in infinite;
}

@keyframes loading-animation {
    0% {
        margin-right: 100%;
    }
    50% {
        margin-right: 100%;
    }
    100% {
        margin-right: -10%;
    }
}
</style>
