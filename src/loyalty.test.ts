import { describe, expect, it } from 'vitest'
import { pointsForAmount, redeemPoints } from './loyalty.ts'

describe('loyalty', () => {
  it('earns one point per whole euro', () => {
    expect(pointsForAmount(1050)).toBe(10)
  })

  it('redeems points when the balance is enough', () => {
    expect(redeemPoints(100, 40)).toBe(60)
  })

  it('rejects redemption above the balance', () => {
    expect(() => redeemPoints(10, 40)).toThrow('insufficient points')
  })
})
