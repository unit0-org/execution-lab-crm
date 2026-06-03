// Render minor units + currency as e.g. "200.00 USD".
export function formatMoney(amountCents, currency) {
  const amount = (amountCents || 0) / 100
  const code = (currency || 'usd').toUpperCase()

  return `${amount.toFixed(2)} ${code}`
}
