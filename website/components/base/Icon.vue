<script setup lang="ts">
type IconType = keyof typeof ICONS_PATHS
type IconSize = 14 | 16 | 18 | 20 | 22 | 24

type IconProps = {
    icon: IconType
    size: IconSize
}

const props = defineProps<IconProps>()

const ICONS_PATHS: Record<string, string> = {
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
