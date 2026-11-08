export function pointsForAmount(cents: number): number {
  return Math.floor(cents / 100)
}
