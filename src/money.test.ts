import { describe, expect, it } from 'vitest'
import { formatAmount, sumAmounts } from './money.ts'

describe('money', () => {
  it('formats cents as currency', () => {
    expect(formatAmount(1050)).toBe('$10.50')
  })

  it('sums amounts', () => {
    expect(sumAmounts([100, 250, 50])).toBe(400)
  })
})
