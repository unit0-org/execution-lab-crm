// Whole-dollar money for the portal, e.g. 150000 → "$1,500". Cents only
// appear when non-zero. Amounts are CAD; the code is shown separately.
export function formatDollars(amountCents) {
  const amount = (amountCents || 0) / 100
  const fraction = amount % 1 === 0 ? 0 : 2

  return '$' + amount.toLocaleString('en-CA', {
    minimumFractionDigits: fraction,
    maximumFractionDigits: 2
  })
}
