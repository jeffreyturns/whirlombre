<script setup lang="ts">
type IconType = keyof typeof ICONS_PATHS
type IconSize = 14 | 16 | 18 | 20 | 22 | 24

type IconProps = {
    icon: IconType
    size: IconSize
}

const props = defineProps<IconProps>()

const ICONS_PATHS: Record<string, string> = {
  copy: '<path stroke="currentColor" d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6Z"></path><path stroke="currentColor" d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9" />',
  export: '<path stroke="currentColor" d="M6 20h12M12 4v12m0 0 3.5-3.5M12 16l-3.5-3.5" />',
  plus: '<path stroke="currentColor" d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />',
  edit: '<path stroke="currentColor" d="m14.363 5.652 1.48-1.48a2 2 0 0 1 2.829 0l1.414 1.414a2 2 0 0 1 0 2.828l-1.48 1.48m-4.243-4.242-9.616 9.615a2 2 0 0 0-.578 1.238l-.242 2.74a1 1 0 0 0 1.084 1.085l2.74-.242a2 2 0 0 0 1.24-.578l9.615-9.616m-4.243-4.242 4.243 4.242" />',
  trash: '<path stroke="currentColor"  d="m20 9-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 0 1 2-2h2.75a2 2 0 0 1 2 2v2m-6.75 0h6.75" />',
  check: '<path stroke="currentColor" d="m5 13 4 4L19 7" />',
  menu: '<path stroke="currentColor" d="M3 6H21M3 12H21M3 18H21" />',
  cancel: '<path stroke="currentColor" d="M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" />',
  navArrowDown: '<path stroke="currentColor" d="m6 9 6 6 6-6" />',
  navArrowUp: '<path stroke="currentColor" d="m6 15 6-6 6 6" />',
  arrowTr: '<path stroke="currentColor" d="M6 19 19 6m0 0v12.48M19 6H6.52" />'
}
</script>

<template>
  <span aria-hidden="true">
    <svg
      :width="`${props.size}px`"
      :height="`${props.size}px`"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      v-html="ICONS_PATHS[props.icon]" />
  </span>
</template>
