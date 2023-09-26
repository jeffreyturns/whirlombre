import { hclToHex } from '../utils'
import { Shade, Shades } from '../types'

/**
 * Generates a series of color shades based on the given hue, chroma, and theme (dark/light).
 *
 * @param hue - The hue value for the color in degrees.
 * @param chroma - The chroma value for the color.
 * @param isDark - (Optional) A flag to indicate if dark shades are to be generated. Default is `false`.
 * @param requiredShades - (Optional) An array of shade intensities required. If not provided, defaults to all available shades.
 *
 * @returns A `Shades` object containing HEX values for each requested shade.
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
    const luminancesLight: Partial<Record<Shade, number>> = {
        [Shade.S10]: 100,
        [Shade.S50]: 95.5,
        [Shade.S100]: 91,
        [Shade.S200]: 81,
        [Shade.S300]: 71,
        [Shade.S400]: 61,
        [Shade.S500]: 51,
        [Shade.S600]: 41,
        [Shade.S700]: 31,
        [Shade.S800]: 21,
        [Shade.S900]: 11,
        [Shade.S950]: 1
    }

    const luminancesDark: Partial<Record<Shade, number>> = {
        [Shade.S10]: 10,
        [Shade.S50]: 20,
        [Shade.S100]: 30,
        [Shade.S200]: 40,
        [Shade.S300]: 50,
        [Shade.S400]: 60,
        [Shade.S500]: 65,
        [Shade.S600]: 70,
        [Shade.S700]: 75,
        [Shade.S800]: 80,
        [Shade.S900]: 85,
        [Shade.S950]: 90
    }

    const shades: Shades = {}

    for (const shade of requiredShades) {
        shades[shade] = hclToHex(hue, chroma, isDark ? luminancesDark[shade]! : luminancesLight[shade]!)
    }

    return shades
}
