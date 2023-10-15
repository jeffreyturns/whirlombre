<script lang="ts" setup>
type IconSize = 16 | 18 | 20 | 24

const props = defineProps<{ icon: string; size?: IconSize }>()
</script>

<template>
  <span
    class="material-symbols-rounded select-none"
    aria-hidden="true"
    :style="{ fontSize: `${props.size}px` }">
    {{ props.icon }}
  </span>
</template>
