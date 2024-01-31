const calculateClockwiseDistance = (start: number, end: number): number =>
  (end - start + 360) % 360

const calculateCounterclockwiseDistance = (start: number, end: number): number =>
  (start - end + 360) % 360

const findMinimumDistance = (distance1: number, distance2: number): number => 
  Math.min(distance1, distance2)

const addOnCircle = (number1: number, number2: number): number =>
  (Math.floor(number1) + Math.floor(number2)) % 360

const subtractOnCircle = (number1: number, number2: number): number =>
  (Math.floor(number1) - Math.floor(number2) + 360) % 360