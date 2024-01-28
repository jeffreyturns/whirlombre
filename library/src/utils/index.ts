import type { LAB, RGB, XYZ } from '../types'
import { ColorSpace, LAB_CONSTANTS, XYZ_CONSTANTS } from '../common'

/**
 * Converts HCL (Hue, Chroma, Luminance) color values to LAB (Lightness, a*, b*) color values.
 */
export const hclToLab = (hue: number, chroma: number, luminance: number): LAB => {
  const a = chroma * 100 * Math.cos((hue * Math.PI) / 180)
  const b = chroma * 100 * Math.sin((hue * Math.PI) / 180)
  return [luminance, a, b]
}

/**
 * Converts LAB (Lightness, a*, b*) color values to XYZ color values.
 */
export const labToXyz = ([l, a, b]: LAB): XYZ => {
  const y = (l + LAB_CONSTANTS.L_ADJUSTMENT) / LAB_CONSTANTS.L_DIVIDER
  const x = a / LAB_CONSTANTS.A_DIVIDER + y
  const z = y - b / LAB_CONSTANTS.B_DIVIDER

  const cube = (v: number) => v * v * v
  const adjust = (v: number) => (v > LAB_CONSTANTS.CUBE_THRESHOLD ? cube(v) : (v - LAB_CONSTANTS.LINEAR_ADJUSTMENT) / LAB_CONSTANTS.LINEAR_DIVIDER)

  return [ColorSpace.Xn * adjust(x), ColorSpace.Yn * adjust(y), ColorSpace.Zn * adjust(z)]
}

/**
 * Converts LAB (Lightness, a*, b*) color values to XYZ color values.
 */
export const xyzToRgb = ([x, y, z]: XYZ): RGB => {
  x /= XYZ_CONSTANTS.XYZ_DIVIDER
  y /= XYZ_CONSTANTS.XYZ_DIVIDER
  z /= XYZ_CONSTANTS.XYZ_DIVIDER

  let r = x * XYZ_CONSTANTS.RGB_COEFFICIENTS.r[0] + y * XYZ_CONSTANTS.RGB_COEFFICIENTS.r[1] + z * XYZ_CONSTANTS.RGB_COEFFICIENTS.r[2]
  let g = x * XYZ_CONSTANTS.RGB_COEFFICIENTS.g[0] + y * XYZ_CONSTANTS.RGB_COEFFICIENTS.g[1] + z * XYZ_CONSTANTS.RGB_COEFFICIENTS.g[2]
  let b = x * XYZ_CONSTANTS.RGB_COEFFICIENTS.b[0] + y * XYZ_CONSTANTS.RGB_COEFFICIENTS.b[1] + z * XYZ_CONSTANTS.RGB_COEFFICIENTS.b[2]

  const gammaCorrect = (color: number) => {
    return color > XYZ_CONSTANTS.GAMMA_THRESHOLD
      ? XYZ_CONSTANTS.GAMMA_COEFFICIENT * color ** XYZ_CONSTANTS.GAMMA_EXPONENT + XYZ_CONSTANTS.GAMMA_OFFSET
      : XYZ_CONSTANTS.LINEAR_GAMMA * color
  }

  r = gammaCorrect(r)
  g = gammaCorrect(g)
  b = gammaCorrect(b)

  return [Math.round(Math.max(0, Math.min(1, r)) * 255), Math.round(Math.max(0, Math.min(1, g)) * 255), Math.round(Math.max(0, Math.min(1, b)) * 255)]
}

/**
 * Converts RGB components to a hexadecimal color code.
 *
 * @param {number} r - Red component of the color.
 * @param {number} g - Green component of the color.
 * @param {number} b - Blue component of the color.
 *
 * @returns {string} The hexadecimal representation of the color.
 */
export const rgbToHex = ([r, g, b]: RGB): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Converts HCL (Hue, Chroma, Luminance) color values to HEX color representation.
 */
export const hclToHex = (hue: number, chroma: number, luminance: number): string => {
  const lab = hclToLab(hue, chroma, luminance)
  const xyz = labToXyz(lab)
  const rgb = xyzToRgb(xyz)
  return rgbToHex(rgb)
}

/**
 * Converts a hexadecimal color code to its RGB representation.
 *
 * @param {string} hex - The hexadecimal color code to convert to RGB format.
 *
 * @returns {RGB} An array representing the RGB components of the color.
 */
export const hexToRgb = (hex: string): RGB => {
  const bigint = parseInt(hex.substring(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return [r, g, b]
}

/**
 * Blends two colors with a specified alpha (transparency) value.
 *
 * @param {string} topHex - The hexadecimal representation of the top color.
 * @param {number} alpha - The alpha value, ranging from 0 to 1, indicating the transparency of the top color.
 * @param {string} backHex - The hexadecimal representation of the background color.
 *
 * @returns {string} The resulting color in hexadecimal format, representing the interpolation
 *   of the top color over the background color based on the provided alpha value.
 *
 * @throws {Error} If the provided alpha value is outside the valid range (0 to 1).
 */
export const combineColorsWithAlpha = (topHex: string, alpha: number, backHex: string): string => {
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha must be between 0 and 1')
  }

  const [r1, g1, b1] = hexToRgb(topHex)
  const [r2, g2, b2] = hexToRgb(backHex)

  const r = Math.round(r1 * alpha + r2 * (1 - alpha))
  const g = Math.round(g1 * alpha + g2 * (1 - alpha))
  const b = Math.round(b1 * alpha + b2 * (1 - alpha))

  return rgbToHex([r, g, b])
}

/**
 * Convert RGB to HCT.
 *
 * @param {number} r - Red component (0 to 1).
 * @param {number} g - Green component (0 to 1).
 * @param {number} b - Blue component (0 to 1).
 * @returns {Object} - Object with hue, chroma, and tone properties representing HCT values.
 */
export const rgbToHct = (r: number, g: number, b: number): { hue: number, chroma: number, tone: number } => {
  // Convert RGB to HSL as an intermediate step
  const hsl = rgbToHSL(r, g, b)

  // HCT approximation based on HSL
  const hue = hsl.h
  const chroma = hsl.s
  const tone = hsl.l

  return { hue, chroma, tone }
}

/**
 * Convert HCT to RGB.
 *
 * @param {number} hue - Hue component (0 to 1).
 * @param {number} chroma - Chroma component (0 to 1).
 * @param {number} tone - Tone component (0 to 1).
 * @returns {number[]} - Array with RGB values (each component is between 0 and 1).
 */
export const hctToRGB = (hue: number, chroma: number, tone: number): number[] => {
  // Convert HCT to HSL as an intermediate step
  const hsl = { h: hue, s: chroma, l: tone }

  // HSL to RGB conversion
  const rgb = hslToRGB(hsl.h, hsl.s, hsl.l)

  return rgb
}

/**
 * Convert RGB to HSL.
 *
 * @param {number} r - Red component (0 to 1).
 * @param {number} g - Green component (0 to 1).
 * @param {number} b - Blue component (0 to 1).
 * @returns {Object} - Object with h, s, l properties representing HSL values.
 */
export const rgbToHSL = (r: number, g: number, b: number): { h: number, s: number, l: number } => {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min)

    switch (max) {
      case r:
        h = (g - b) / (max - min) + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / (max - min) + 2
        break
      case b:
        h = (r - g) / (max - min) + 4
        break
    }

    h /= 6
  }

  return { h, s, l }
}

/**
 * Convert HSL to RGB.
 *
 * @param {number} h - Hue component (0 to 1).
 * @param {number} s - Saturation component (0 to 1).
 * @param {number} l - Lightness component (0 to 1).
 * @returns {number[]} - Array with RGB values (each component is between 0 and 1).
 */
export const hslToRGB = (h: number, s: number, l: number): number[] => {
  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [r, g, b]
}