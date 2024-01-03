import { describe, expect, it } from 'vitest'

import { Shade, generateShades } from '../src'

describe('generateShades function', () => {
  it('should generate shades with valid HEX values for default requiredShades', () => {
    const result = generateShades(240, 1)
    //@ts-ignore
    console.log('Default requiredShades:', result)

    Object.values(result).forEach((shadeValue) => {
      if (shadeValue)
        expect(shadeValue).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    })
  })

  it('should generate shades with valid HEX values for custom requiredShades', () => {
    const customShades: Shade[] = [Shade.S10, Shade.S100, Shade.S500]
    const result = generateShades(180, 0.8, true, undefined, customShades)
    //@ts-ignore
    console.log('Custom requiredShades:', result)

    customShades.forEach((shade) => {
      const shadeValue = result[shade]
      if (shadeValue)
        expect(shadeValue).toMatch(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    })
  })
})
