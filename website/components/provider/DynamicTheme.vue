<script setup lang="ts">
import { generateTheme } from '~/config/theme.config'

import { generateCssVariables } from '~/utils/generate-css'

const theme = useTheme()
const colorMode = useColorMode()

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
    <div>
        <slot />
    </div>
</template>
