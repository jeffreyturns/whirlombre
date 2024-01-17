<script setup lang="ts">
const { isLoading, progress } = useLoadingIndicator()
</script>

<template>
    <div class="fixed z-99 top-0 left-0 right-0 h-[3px]" v-if="isLoading">
    <div class="h-full bg-accent-500 transition-all" :style="{ width: `${progress}%` }"></div>
  </div>
</template>
