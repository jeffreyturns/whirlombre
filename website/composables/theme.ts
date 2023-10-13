import { Theme } from '~/config/theme.config'

export const useTheme = () =>
  useState<Theme>('theme', () => ({
    light: {
      accent: {
        hue: 35,
        chroma: 0.45
      },
      surface: {
        hue: 35,
        chroma: 0.03
      }
    },
    dark: {
      accent: {
        hue: 35,
        chroma: 0.3
      },
      surface: {
        hue: 35,
        chroma: 0.03
      }
    }
  }))
