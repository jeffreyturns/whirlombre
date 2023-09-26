/**
 * Represents a color in the RGB (Red, Green, Blue) color space.
 * Each component of the tuple ranges from 0 to 255.
 */
export type RGB = [number, number, number]

/**
 * Represents a color in the LAB (Lightness, a*, b*) color space.
 */
export type LAB = [number, number, number]

/**
 * Represents a color in the XYZ color space.
 */
export type XYZ = [number, number, number]

/**
 * Enumerates various shade intensities, commonly used for theme color definitions.
 * The number represents the intensity of the shade, where a higher value indicates a darker shade.
 */
export enum Shade {
    S10 = 10,
    S50 = 50,
    S100 = 100,
    S200 = 200,
    S300 = 300,
    S400 = 400,
    S500 = 500,
    S600 = 600,
    S700 = 700,
    S800 = 800,
    S900 = 900,
    S950 = 950
}

/**
 * Represents a mapping between shade intensities and their corresponding HEX color values.
 */
export type Shades = Partial<Record<Shade, string>>
