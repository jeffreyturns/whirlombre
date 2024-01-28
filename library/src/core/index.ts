import { hclToHex } from '../utils'
import type { Shades } from '../types'
import { Shade } from '../types'

import { harmonize } from '../utils/harmonize'

/**
 * Generates a series of color shades based on the given hue, chroma, and theme (dark/light).
 *
 * @param {number} hue - The hue value for the color in degrees.
 * @param {number} chroma - The chroma value for the color.
 * @param {boolean} [isDark=false] - A flag to indicate if dark shades are to be generated. Default is `false`.
 * @param {number} [hueToHarmonize] - An optional hue value for harmonizing colors. If not provided, the original hue is used.
 * @param {Shade[]} [requiredShades] - An array of shade intensities required. If not provided, defaults to all available shades.
 *
 * @returns {Shades} A `Shades` object containing HEX values for each requested shade.
 *
 * @example
 * ```typescript
 * // Generate dark shades of a color with hue 200 and chroma 50.
 * const shades = generateShades(200, 50, true);
 * console.log(shades.S500);  // Outputs the HEX value for the S500 dark shade.
 * ```
 */
export const generateShades = (
  hue: number,
  chroma: number,
  isDark = false,
  hueToHarmonize?: number,
  requiredShades: Shade[] = [
    Shade.S10,
    Shade.S50,
    Shade.S100,
    Shade.S200,
    Shade.S300,
    Shade.S400,
    Shade.S500,
    Shade.S600,
    Shade.S700,
    Shade.S800,
    Shade.S900,
    Shade.S950
  ]
): Shades => {
  /**
   * Luminance values for light shades.
   */
  const luminancesLight: Partial<Record<Shade, number>> = {
    [Shade.S10]: 100, [Shade.S50]: 95.5, [Shade.S100]: 91, [Shade.S200]: 81,
    [Shade.S300]: 71, [Shade.S400]: 61, [Shade.S500]: 51, [Shade.S600]: 41,
    [Shade.S700]: 31, [Shade.S800]: 21, [Shade.S900]: 11, [Shade.S950]: 1
  }

  /**
   * Luminance values for dark shades.
   */
  const luminancesDark: Partial<Record<Shade, number>> = {
    [Shade.S10]: 10, [Shade.S50]: 20, [Shade.S100]: 30, [Shade.S200]: 40,
    [Shade.S300]: 50, [Shade.S400]: 60, [Shade.S500]: 65, [Shade.S600]: 70,
    [Shade.S700]: 75, [Shade.S800]: 80, [Shade.S900]: 85, [Shade.S950]: 90
  }

  /**
   * Object to store generated shades.
   */
  const shades: Shades = {}

  // Harmonize colors if hueToHarmonize is provided
if (hueToHarmonize) {
  // Apply harmonization to primary shades
  for (const shade of requiredShades) {
    const luminance = isDark ? luminancesDark[shade]! : luminancesLight[shade]!
    const sourceHex = hclToHex(hueToHarmonize, chroma, luminance)
    
    const currentShadeHex = shades[shade] = hclToHex(hue, chroma, luminance)

    const harmonizedShadeHex = harmonize(currentShadeHex, sourceHex)

    shades[shade] = harmonizedShadeHex
  }
} else {
  // Generate shades without harmonization
  for (const shade of requiredShades) {
    const luminance = isDark ? luminancesDark[shade]! : luminancesLight[shade]!
    shades[shade] = hclToHex(hue, chroma, luminance)
  }
}


  return shades
}

