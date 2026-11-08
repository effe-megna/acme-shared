export function pointsForAmount(cents: number): number {
  return Math.floor(cents / 100)
}

export function redeemPoints(balance: number, cost: number): number {
  if (cost > balance) throw new Error('insufficient points')
  return balance - cost
}

export type Tier = 'bronze' | 'silver' | 'gold'

export function tierFor(points: number): Tier {
  if (points >= 500) return 'gold'
  if (points >= 100) return 'silver'
  return 'bronze'
}
