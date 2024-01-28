import { rgbToHct, rgbToHex, hctToRGB } from '../utils'

import { RGB, HCT } from '../types'

const hexToRgb = (hexColor: string): RGB => [
  parseInt(hexColor.slice(1, 3), 16) / 255,
  parseInt(hexColor.slice(3, 5), 16) / 255,
  parseInt(hexColor.slice(5, 7), 16) / 255
]

/**
 * Harmonize the design color's HCT hue towards the key color's HCT
 * hue, creating a recognizable shift towards the key color.
 *
 * @param {string} designColor - HEX representation of an arbitrary color.
 * @param {string} keyColor - HEX representation of the main theme color.
 * @returns {string} The harmonized color with a shifted hue towards the key color.
 */
export const harmonize = (designColor: string, keyColor: string): string => {
  const designRgb: RGB = hexToRgb(designColor)

  const keyRgb: RGB = hexToRgb(keyColor)

  const designHct: HCT = rgbToHct(designRgb[0], designRgb[1], designRgb[2])
  const keyHct: HCT = rgbToHct(keyRgb[0], keyRgb[1], keyRgb[2])

  const hueDifference: number = Math.abs(designHct.hue - keyHct.hue)
  const rotationDegrees: number = Math.min(hueDifference * 0.233423, 15.0)
  const blendedHue: number = designHct.hue + (rotationDegrees * Math.sign(keyHct.hue - designHct.hue))

  const blendedRgb: number[] = hctToRGB(blendedHue, designHct.chroma, designHct.tone)

  const blendedHex: string = rgbToHex([Math.round(blendedRgb[0] * 255), Math.round(blendedRgb[1] * 255), Math.round(blendedRgb[2] * 255)])

  return blendedHex
}