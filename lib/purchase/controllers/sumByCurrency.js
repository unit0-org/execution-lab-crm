const addPurchase = (totals, { currency, amount_cents }) => {
  const code = currency || 'usd'
  totals[code] = (totals[code] || 0) + (amount_cents || 0)

  return totals
}

// A contact's spend in minor units, grouped by currency.
export function sumByCurrency(purchases) {
  const totals = purchases.reduce(addPurchase, {})

  return Object.entries(totals).map(([currency, cents]) => ({
    currency,
    cents
  }))
}
