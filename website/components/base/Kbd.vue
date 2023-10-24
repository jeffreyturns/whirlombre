<script setup lang="ts">

type KDBProps = {
  icon?: string
  text?: string
}

const props = defineProps<KDBProps>()
</script>

<template>
  <kbd
    class="h-auto w-auto inline-flex select-none items-center justify-center rounded-wl-small bg-surface-200/35 text-[0.75rem] font-medium font-sans text-surface-900 ring-1 ring-surface-300 ring-inset">
    <template v-if="props.icon">
      <BaseIcon class="pa-0.5" :icon="props.icon" :size="18" />
    </template>
    <template v-if="props.text">
      <span class="pa-0.5 px-1">
        {{ props.text }}
      </span>
    </template>
  </kbd>
</template>
