<script setup lang="ts">
const { isLoading, progress } = useLoadingIndicator()
</script>

<template>
    <div class="fixed z-99 top-0 left-0 right-0 h-[6px] rounded-wl-small bg-accent-500/25" v-if="isLoading">
    <div class="h-full bg-accent-500 transition-all rounded-wl-small" :style="{ width: `${progress}%` }" />
  </div>
</template>
