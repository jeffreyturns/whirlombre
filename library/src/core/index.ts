import { hclToHex } from '../utils'
import type { Shades } from '../types'
import { Shade } from '../types'

const defaultShades: Shade[] = [
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

type GenerateShadesOptions = {
  hue: number
  chroma: number
}
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
export const generateShades = (options: GenerateShadesOptions): Shades => {

  /**
   * Luminance values for light shades.
   */
  const luminance: Partial<Record<Shade, number>> = {
    [Shade.S50]: 95.5, [Shade.S100]: 91, [Shade.S200]: 81,
    [Shade.S300]: 71, [Shade.S400]: 61, [Shade.S500]: 51, [Shade.S600]: 41,
    [Shade.S700]: 31, [Shade.S800]: 21, [Shade.S900]: 11, [Shade.S950]: 1
  }

  /**
   * Object to store generated shades.
   */
  const shades: Shades = {}

  for (const shade of defaultShades) {

    shades[shade] = hclToHex(options.hue, options.chroma, luminance[shade]!)
  }

  return shades
}

