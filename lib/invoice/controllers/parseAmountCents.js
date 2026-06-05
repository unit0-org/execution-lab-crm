// Convert a dollars string (e.g. "1,250.00") to integer cents.
export function parseAmountCents(value) {
  const clean = String(value || '').replace(/[^0-9.]/g, '')
  const amount = parseFloat(clean) || 0

  return Math.round(amount * 100)
}
