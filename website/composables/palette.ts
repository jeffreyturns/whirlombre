import { ShadeItem } from '~/types/shade'

export const usePalette = () =>
  useState<ShadeItem[]>('palette', () =>
    [{ id: generateUUID(), name: 'Example Color 1', hue: Math.floor(Math.random() * 360), chroma: 0.45, harmonize: null, isDark: false }]
  )

export const addRandom = () => {
  const palette = usePalette()
  palette.value.push({
    id: generateUUID(),
    name: `Random Color ${Math.floor(Math.random() * 9999)}`,
    hue: Math.floor(Math.random() * 360),
    chroma: Number((Math.random() * 0.5).toFixed(2)),
    harmonize: null,
    isDark: false
  })
}
