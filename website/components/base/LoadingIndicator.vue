<script setup lang="ts">
const { isLoading, progress } = useLoadingIndicator()
</script>

<template>
  <div v-if="isLoading" class="fixed left-0 right-0 z-99 mx-1 h-[6px] rounded-wl-small bg-accent-100">
    <div class="h-full flex rounded-wl-small bg-accent-700 transition-all" :style="{ width: `${progress}%` }">
      <div class="absolute inset-y-0 right-0 h-full w-1.5 rounded-wl-small bg-accent-700" />
    </div>
  </div>
</template>
