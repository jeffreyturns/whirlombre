<script lang="ts" setup>
export type IconSize = 16 | 18 | 20 | 24

type IconProps = {
  icon: string;
  size?: IconSize
}

const props = defineProps<IconProps>()
</script>

<template>
  <span
    class="material-symbols-rounded select-none"
    aria-hidden="true"
    :style="{ fontSize: `${props.size}px` }">
    {{ props.icon }}
  </span>
</template>
