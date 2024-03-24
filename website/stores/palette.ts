import type { ShadeItem } from '~/types/shade'

export const usePaletteStore = defineStore('palette', () => {
  const randomHue = () => Math.floor(Math.random() * 360)
  const randomChroma = () => Number((Math.random() * 0.5).toFixed(2))

  const shades = ref<ShadeItem[]>(
    [{ id: generateUUID(), name: 'Example Color 1', hue: randomHue(), chroma: 0.45, harmonize: null, isDark: false }]
  )

  function addRandomShade () {
    shades.value.push({
      id: generateUUID(),
      name: `Random Color ${Math.floor(Math.random() * 9999)}`,
      hue: randomHue(),
      chroma: randomChroma(),
      harmonize: null,
      isDark: false
    })
  }

  function removeShade (removeId: string) {
    shades.value = shades.value.filter((shade: ShadeItem) => shade.id !== removeId)
  }

  return {
    shades,
    addRandomShade,
    removeShade
  }
})
