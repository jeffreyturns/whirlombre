import type { Config } from 'tailwindcss'
import { generateShades } from '../library/src'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        foo: generateShades(35, 0.4),
        bar: generateShades(35, 0.03)
      }
    },
    fontFamily: {
      sans: ['Inclusive Sans', 'sans-serif'],
      headline: ['Dela Gothic One', 'sans-serif'],
      minoan: ['Noto Sans Cypro Minoan', 'sans-serif']
    },
    borderRadius: {
      none: '0px',
      sm: '2px'
    },
    transitionTimingFunction: {
      'quick-snap': 'cubic-bezier(.87,0,.13,1)',
      'out-glide': 'cubic-bezier(.4,0,.2,1)'
    }
  }
}
