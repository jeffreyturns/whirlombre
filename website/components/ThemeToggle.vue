<script setup lang="ts">
import { generateTheme } from '~/config/theme.config'

import { generateCssVariables } from '~/utils/generate-css'

const theme = useTheme()
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const inject = () => {
    const styleTag = document.createElement('style')
    styleTag.textContent = generateCssVariables(
        colorMode.value === 'dark' ? generateTheme(theme.value).dark.colors : generateTheme(theme.value).light.colors
    )

    document.head.appendChild(styleTag)
}

watch(
    () => [colorMode.value, theme.value],
    () => {
        inject()
    },
    { deep: true }
)
</script>

<template>
    <button
        type="button"
        class="inline-flex items-center justify-center rounded-sm p-2 text-surface-950 hover:bg-surface-950/12"
        @click="toggleTheme()">
        <span class="sr-only">Close menu</span>
        <span
            class="material-symbols-outlined h-6 w-6"
            aria-hidden="true">
            <svg
                v-if="colorMode.value === 'dark'"
                width="24px"
                height="24px"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24">
                <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"></path>
            </svg>
            <svg
                v-else
                width="24px"
                height="24px"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24">
                <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z"></path>
            </svg>
        </span>
    </button>
</template>
