export function pointsForAmount(cents: number): number {
  return Math.floor(cents / 100)
}

export function redeemPoints(balance: number, cost: number): number {
  if (cost > balance) throw new Error('insufficient points')
  return balance - cost
}
