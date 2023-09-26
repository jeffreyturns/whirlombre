/**
 * Defines reference white values for the D65 illuminant in the XYZ color space.
 */
export const ColorSpace = {
    Xn: 95.047,
    Yn: 100.0,
    Zn: 108.883
} as const

/**
 * Contains constants related to the XYZ color space and its transformation to RGB.
 */
export const XYZ_CONSTANTS = {
    /** Divider for normalizing XYZ values. */
    XYZ_DIVIDER: 100,

    /** Coefficients used for converting from XYZ to RGB. */
    RGB_COEFFICIENTS: {
        r: [3.2406, -1.5372, -0.4986],
        g: [-0.9689, 1.8758, 0.0415],
        b: [0.0557, -0.204, 1.057]
    },

    /** Threshold for gamma correction. */
    GAMMA_THRESHOLD: 0.0031308,

    /** Coefficient for gamma correction. */
    GAMMA_COEFFICIENT: 1.055,

    /** Exponent used for gamma correction. */
    GAMMA_EXPONENT: 1.0 / 2.4,

    /** Offset value for gamma correction. */
    GAMMA_OFFSET: -0.055,

    /** Value used for linear gamma correction. */
    LINEAR_GAMMA: 12.92
} as const

/**
 * Contains constants related to the LAB color space.
 */
export const LAB_CONSTANTS = {
    /** Adjustment value for L channel. */
    L_ADJUSTMENT: 16,

    /** Divider for L channel. */
    L_DIVIDER: 116,

    /** Divider for a* channel. */
    A_DIVIDER: 500,

    /** Divider for b* channel. */
    B_DIVIDER: 200,

    /** Threshold for determining if a value should be cubed. */
    CUBE_THRESHOLD: 0.206897,

    /** Adjustment value for linear calculations. */
    LINEAR_ADJUSTMENT: 16 / 116,

    /** Divider for linear calculations. */
    LINEAR_DIVIDER: 7.787
} as const
