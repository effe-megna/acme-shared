import { describe, expect, it } from 'vitest'
import { remainingRefundable } from './refunds.ts'

describe('refunds', () => {
  it('computes what is still refundable', () => {
    expect(remainingRefundable(1000, 300)).toBe(700)
  })

  it('never goes below zero', () => {
    expect(remainingRefundable(1000, 1500)).toBe(0)
  })
})
