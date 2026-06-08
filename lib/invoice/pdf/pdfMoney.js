// Money for the invoice document: "$1,234.50" (symbol, no code).
export function pdfMoney(cents) {
  const amount = (cents || 0) / 100

  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}
