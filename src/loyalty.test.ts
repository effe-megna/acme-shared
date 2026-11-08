import { describe, expect, it } from 'vitest'
import { pointsForAmount } from './loyalty.ts'

describe('loyalty', () => {
  it('earns one point per whole euro', () => {
    expect(pointsForAmount(1050)).toBe(10)
  })
})
