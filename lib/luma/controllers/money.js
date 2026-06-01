// Parse a Luma amount like "$0.00" or "12.50" into integer cents.
export function parseAmountCents(amount) {
  const n = parseFloat(String(amount).replace(/[^0-9.]/g, ''))

  if (Number.isNaN(n)) return 0

  return Math.round(n * 100)
}
