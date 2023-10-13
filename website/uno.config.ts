import { defineConfig, presetUno, presetTypography, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import type { Theme } from 'unocss/preset-uno'

import presetTheme from 'unocss-preset-theme'

import { generateTheme } from './config/theme.config'

// import { DEFAULT } from './config/prose.config'

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
        presetTypography({
            cssExtend: {
                'h1,h2,h3,h4,h5,h6': {
                    color: 'rgba(var(--un-preset-theme-colors-surface-950), 1)',
                    'font-weight': '600',
                    'line-height': 1.25,
                    'text-decoration': 'none'
                },
                a: {
                    color: 'rgba(var(--un-preset-theme-colors-accent-700), 1)',
                    'text-decoration': 'none',
                    'font-weight': '500'
                },
                'a:hover': {
                    'text-decoration': 'underline'
                },
                'a code': {
                    color: 'rgba(var(--un-preset-theme-colors-accent-700), 1)'
                },
                'p,ul,ol,pre': {
                    margin: '1em 0',
                    'line-height': 1.75
                },
                blockquote: {
                    margin: '1em 0',
                    'padding-left': '1em',
                    'font-style': 'italic',
                    'border-left': '.25em solid rgba(var(--un-preset-theme-colors-surface-200), 1)'
                },
                // taking 16px as a base, we scale h1, h2, h3, and h4 like
                // 16 (base) > 18 (h4) > 22 (h3) > 28 (h2) > 36 (h1)
                h1: {
                    margin: '1rem 0', // h1 is always at the top of the page, so only margin 1 * root font size
                    'font-size': '2.25em',
                    color: 'rgba(var(--un-preset-theme-colors-accent-700), 1)'
                },
                h2: {
                    margin: '1.75em 0 .5em',
                    'font-size': '1.75em'
                },
                h3: {
                    margin: '1.5em 0 .5em',
                    'font-size': '1.375em'
                },
                h4: {
                    margin: '1em 0',
                    'font-size': '1.125em'
                },
                'img,video': {
                    'max-width': '100%'
                },
                'figure,picture': {
                    margin: '1em 0'
                },
                figcaption: {
                    color: 'var(--un-prose-captions)',
                    'font-size': '.875em'
                },
                code: {
                    color: 'rgba(var(--un-preset-theme-colors-surface-950), 1)',
                    'font-size': '.875em',
                    'font-weight': 600
                    //   'font-family': theme.fontFamily?.mono,
                },
                ':not(pre) > code::before,:not(pre) > code::after': {
                    content: '"`"'
                },
                pre: {
                    padding: '1.25rem 1.5rem',
                    'overflow-x': 'auto',
                    'border-radius': '.125rem',
                },
                'pre,code': {
                    'white-space': 'pre-wrap',
                    'word-spacing': 'normal',
                    'word-break': 'break-word',
                    'word-wrap': 'normal',
                    '-moz-tab-size': 4,
                    '-o-tab-size': 4,
                    'tab-size': 4,
                    '-webkit-hyphens': 'none',
                    '-moz-hyphens': 'none',
                    hyphens: 'none',
                    background: 'rgba(var(--un-preset-theme-colors-surface-100), 1)'
                },
                'pre code': {
                    'font-weight': 'inherit'
                },
                'ol,ul': {
                    'padding-left': '1.25em'
                },
                ol: {
                    'list-style-type': 'decimal'
                },
                'ol[type="A"]': {
                    'list-style-type': 'upper-alpha'
                },
                'ol[type="a"]': {
                    'list-style-type': 'lower-alpha'
                },
                'ol[type="A" s]': {
                    'list-style-type': 'upper-alpha'
                },
                'ol[type="a" s]': {
                    'list-style-type': 'lower-alpha'
                },
                'ol[type="I"]': {
                    'list-style-type': 'upper-roman'
                },
                'ol[type="i"]': {
                    'list-style-type': 'lower-roman'
                },
                'ol[type="I" s]': {
                    'list-style-type': 'upper-roman'
                },
                'ol[type="i" s]': {
                    'list-style-type': 'lower-roman'
                },
                'ol[type="1"]': {
                    'list-style-type': 'decimal'
                },
                ul: {
                    'list-style-type': 'disc'
                },
                'ol > li::marker,ul > li::marker,summary::marker': {
                    color: 'var(--un-prose-lists)'
                },
                hr: {
                    margin: '2em 0',
                    border: '1px solid rgba(var(--un-preset-theme-colors-surface-200), 1)'
                },
                table: {
                    display: 'block',
                    margin: '1em 0',
                    'border-collapse': 'collapse',
                    'overflow-x': 'auto'
                },
                'tr:nth-child(2n)': {
                    background: 'var(--un-prose-bg-soft)'
                },
                'td,th': {
                    border: '1px solid rgba(var(--un-preset-theme-colors-surface-200), 1)',
                    padding: '.625em 1em'
                },
                abbr: {
                    cursor: 'help'
                },
                kbd: {
                    color: 'var(--un-prose-code)',
                    border: '1px solid',
                    padding: '.25rem .5rem',
                    'font-size': '.875em',
                    'border-radius': '.25rem'
                },
                details: {
                    margin: '1em 0',
                    padding: '1.25rem 1.5rem',
                    background: 'var(--un-prose-bg-soft)'
                },
                summary: {
                    cursor: 'pointer',
                    'font-weight': '600'
                }
            }
        }),
        // @ts-ignore
        presetTheme<Theme>({
            theme: {
                dark
            }
        }),
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
    theme: light,
    shortcuts: {
        'btn-base': 'text-sm h-10 inline-flex items-center px-4 py-2.5 rounded-sm leading-6 transition-colors focus:outline-none',
        'btn-filled': 'btn-base bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900',
        'btn-outlined': 'ring-1 ring-surface-950/12 bg-transparent hover:bg-accent-700/12 text-accent-700 focus:bg-accent-700/12',
        //
        'icon-btn-base': 'inline-flex items-center justify-center rounded-sm p-2',
        'icon-btn-text': 'icon-btn-base text-surface-950 hover:bg-surface-950/12',
        //
        'chip-base': 'mx-0.5 mb-1 px-1.5 inline-flex rounded-sm items-center transition-colors',
        'chip-active': 'chip-base bg-accent-100 text-accent-950',
        'chip-inactive': 'chip-base ring-1 ring-surface-950/12 text-surface-950 hover:bg-surface-100',
        //
        'base-slider':
            'appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-sm [&::-webkit-slider-runnabe-track]:h-auto [&::-webkit-slider-runnable-track]:p-1 [&::-webkit-slider-runnable-track]:bg-accent-500/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:bg-accent-500 [&::-webkit-slider-thumb]:hover:bg-accent-600 cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:focus:bg-accent-600'
    }
})
