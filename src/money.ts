export function formatAmount(cents: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100)
}

export function sumAmounts(amounts: number[]): number {
  return amounts.reduce((total, amount) => total + amount, 0)
}
