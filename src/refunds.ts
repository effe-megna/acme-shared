export function remainingRefundable(total: number, refunded: number): number {
  return Math.max(0, total - refunded)
}
