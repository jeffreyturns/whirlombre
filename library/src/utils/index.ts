import { LAB, XYZ, RGB } from '../types'
import { ColorSpace, XYZ_CONSTANTS, LAB_CONSTANTS } from '../common'

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
 * Converts RGB (Red, Green, Blue) color values to HEX color representation.
 */
export const rgbToHex = ([r, g, b]: RGB): string => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 * Converts HCL (Hue, Chroma, Luminance) color values to HEX color representation.
 */
export function hclToHex(hue: number, chroma: number, luminance: number): string {
    const lab = hclToLab(hue, chroma, luminance)
    const xyz = labToXyz(lab)
    const rgb = xyzToRgb(xyz)
    return rgbToHex(rgb)
}
