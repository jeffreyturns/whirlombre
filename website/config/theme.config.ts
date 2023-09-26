import { generateShades } from '../../library/src'

export interface Theme {
    light: {
        accent: {
            hue: number
            chroma: number
        }
        surface: {
            hue: number
            chroma: number
        }
    }
    dark: {
        accent: {
            hue: number
            chroma: number
        }
        surface: {
            hue: number
            chroma: number
        }
    }
}

export const generateTheme = (theme: Theme) => {
    const generateColorsForTheme = (isDark: boolean) => {
        const accent = generateShades(
            isDark ? theme.dark.accent.hue : theme.light.accent.hue,
            isDark ? theme.dark.accent.chroma : theme.light.accent.chroma,
            isDark
        )
        const surface = generateShades(
            isDark ? theme.dark.surface.hue : theme.light.surface.hue,
            isDark ? theme.dark.surface.chroma : theme.light.surface.chroma,
            isDark
        )

        return {
            accent,
            surface
        }
    }

    return {
        light: {
            colors: generateColorsForTheme(false)
        },
        dark: {
            colors: generateColorsForTheme(true)
        }
    }
}
