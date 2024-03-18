import * as utils from '../utils/harmonize'

export const harmonize = (keyHue: number, designHue: number): number => {

    const clockwiseDistance = utils.calculateClockwiseDistance(keyHue, designHue)
    const counterclockwiseDistance = utils.calculateCounterclockwiseDistance(keyHue, designHue)
      
    const minimumDistance = utils.findMinimumDistance(clockwiseDistance, counterclockwiseDistance)
    
    const shiftPercent = (minimumDistance / 100) * 25
    
    const result = clockwiseDistance < counterclockwiseDistance
      ? utils.subtractOnCircle(designHue, shiftPercent)
      : utils.addOnCircle(designHue, shiftPercent)
    
    return result
  }