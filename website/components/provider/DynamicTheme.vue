<script setup lang="ts">
import { generateTheme } from '~/config/theme.config'

type Colors = {
    [key: string]: {
        [key: string]: string
    }
}

const theme = useTheme()
const colorMode = useColorMode()

const hexToRgb = (hex: string): string => {
  const trimmedHex = hex.slice(1)

  const bigint = parseInt(trimmedHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r}, ${g}, ${b}`
}

const generateCssVariables = (colors: Colors): string => {
  let cssString = ':root {\n'

  for (const theme of Object.keys(colors)) {
    for (const shade of Object.keys(colors[theme])) {
      const rgbValue = hexToRgb(colors[theme][shade])
      cssString += `    --un-preset-theme-colors-${theme}-${shade}: ${rgbValue};\n`
    }
  }

  cssString += '}'
  return cssString
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
  <div>
    <slot />
  </div>
</template>
