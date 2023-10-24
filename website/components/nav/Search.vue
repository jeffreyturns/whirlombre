<script lang="ts" setup>
const search = useSearch()

const open = () => {
  search.value = true
}
</script>

<template>
  <button
    class="w-[12rem] flex flex-shrink-0 cursor-text items-center justify-center gap-x-1.5 rounded-wl-small px-2.5 py-2 text-sm font-medium text-surface-700 outline-none transition-wl-colors focus:outline-none"
    type="button"
    @click="open()">
    <span
      class="h-5 w-5 flex-shrink-0"
      aria-hidden="true">
      <BaseIcon icon="search" :size="18" />
    </span>
    Search...
    <div class="ml-auto inline-flex gap-0.5">
      <BaseKbd icon="keyboard_command_key" class="px-0.5" />
      <BaseKbd text="K" />
    </div>
  </button>
</template>
