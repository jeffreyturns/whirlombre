export const harmonize = (keyHue: number, designHue: number): number => {

    const clockwiseDistance = calculateClockwiseDistance(keyHue, designHue)
    const counterclockwiseDistance = calculateCounterclockwiseDistance(keyHue, designHue)
      
    const minimumDistance = findMinimumDistance(clockwiseDistance, counterclockwiseDistance)
    
    const shiftPercent = (minimumDistance / 100) * 25
    
    const result = clockwiseDistance < counterclockwiseDistance
      ? subtractOnCircle(designHue, shiftPercent)
      : addOnCircle(designHue, shiftPercent)
        
    return result
  }    