import { describe, expect, it } from 'vitest'

import { harmonize } from '../src/core/harmonize'

describe('harmonize function', () => {
    it('should return the correct result for the harmonization for primary 120 and extended 65', () => {
      const primary = 120
      const extended = 65
      const expectedResult = harmonize(primary, extended)
  
      expect(expectedResult).toBe(78)
    })
  })