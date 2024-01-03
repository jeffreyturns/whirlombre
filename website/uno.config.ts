/* eslint-disable @stylistic/max-len */
import { defineConfig, presetUno, presetTypography, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import type { Theme } from 'unocss/preset-uno'

import { presetTheme } from 'unocss-preset-theme'

import { generateTheme } from './config/theme.config'
import { DEFAULT } from './config/prose.config'

const { light, dark } = generateTheme({
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
})

export default defineConfig({
  rules: [],
  presets: [
    presetUno(),
    presetTypography({ cssExtend: DEFAULT() }),
    // @ts-ignore
    presetTheme<Theme>({ theme: { dark } }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        base: ['Inclusive Sans', 'Inclusive Sans:400'],
        headline: ['Dela Gothic One', 'Dela Gothic One:400'],
        minoan: ['Noto Sans Cypro Minoan', 'Noto Sans Cypro Minoan:400']
      }
    })
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      accent: light.colors.accent,
      surface: light.colors.surface
    },
    borderRadius: { 'wl-small': '2px', 'wl-medium': '8px', 'wl-large': '12px' }
  } as Theme,
  shortcuts: {
    // [Category]-[Type]-[Item]-[State]
    /*
     *
     * Base Components
     *
     */
    'btn-wl-base': 'text-sm outline-none inline-flex items-center justify-center px-4 py-2 rounded-wl-small leading-6 transition-wl-colors focus:outline-none',
    'icon-btn-base': 'inline-flex items-center justify-center rounded-wl-small p-2',
    'chip-base': 'mx-0.5 mb-1 px-1.5 inline-flex rounded-wl-small items-center transition-wl-colors cursor-pointer',
    /*
     *
     * Components
     *
     */
    'btn-wl-filled': 'btn-wl-base bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900',
    'btn-wl-filled-disabled': 'btn-wl-base bg-surface-950/12 text-surface-950/75 cursor-not-allowed',
    'btn-wl-outlined': 'btn-wl-base ring-1 ring-surface-950/12 bg-transparent hover:bg-accent-700/12 text-accent-700 focus:bg-accent-700/12',
    'btn-wl-text': 'btn-wl-base bg-transparent text-surface-950 hover:bg-surface-950/12 focus:bg-surface-950/12',
    'icon-btn-wl-text': 'icon-btn-base text-surface-950 hover:bg-surface-950/12 transition-wl-colors',
    'chip-wl-active': 'chip-base bg-accent-100 text-accent-950',
    'chip-wl-inactive': 'chip-base ring-1 ring-surface-950/12 text-surface-950 hover:bg-surface-100',
    'slider-wl-tonal': 'appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-wl-small [&::-webkit-slider-runnabe-track]:h-auto [&::-webkit-slider-runnable-track]:p-1 [&::-webkit-slider-runnable-track]:bg-accent-500/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-wl-small [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:hover:bg-accent-600 cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:focus:bg-accent-600',
    /*
     *
     * Motion
     *
     */
    'ease-quick-snap': 'ease-[cubic-bezier(.87,0,.13,1)]',
    'ease-out-glide': 'ease-[cubic-bezier(.4,0,.2,1)]',
    //
    'duration-short': 'duration-150',
    'duration-medium': 'duration-300',
    'duration-long': 'duration-450',
    //
    'timing-quick-snap-short': 'ease-quick-snap duration-short',
    'timing-quick-snap-medium': 'ease-quick-snap duration-medium',
    'timing-quick-snap-long': 'ease-quick-snap duration-long',
    //
    'timing-out-glide-short': 'ease-out-glide duration-short',
    'timing-out-glide-medium': 'ease-out-glide duration-medium',
    'timing-out-glide-long': 'ease-out-glide duration-long',
    //
    'transition-wl-all': 'transition-all timing-quick-snap-short',
    'transition-wl-colors': 'transition-colors timing-quick-snap-short',
    'transition-wl-opacity': 'transition-opacity timing-quick-snap-short'
  }
})
