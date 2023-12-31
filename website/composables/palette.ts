import { ShadeItem } from '~/types/shade'

const randomHue = () => Math.floor(Math.random() * 360)

export const usePalette = () =>
  useState<ShadeItem[]>('palette', () =>
    [{ id: generateUUID(), name: 'Example Color 1', hue: randomHue(), chroma: 0.45, harmonize: null, isDark: false }]
  )
