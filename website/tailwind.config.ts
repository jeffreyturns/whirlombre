import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { generateShades } from '../library/src'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        foo: generateShades({
          hue: 35,
          chroma: 0.45
        }),
        bar: generateShades({
          hue: 35,
          chroma: 0.075
        })
      }
    },
    fontFamily: {
      sans: ['Inclusive Sans', ...defaultTheme.fontFamily.sans],
      headline: ['Dela Gothic One', ...defaultTheme.fontFamily.sans],
      minoan: ['Noto Sans Cypro Minoan', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem'
    },
    transitionTimingFunction: {
      'quick-snap': 'cubic-bezier(.87,0,.13,1)',
      'out-glide': 'cubic-bezier(.4,0,.2,1)'
    }
  }
}
