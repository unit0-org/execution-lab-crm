// The plan's second half, priced inline from what the seat still owes —
// the same derivation the automatic charge uses, so the two can never ask
// for different amounts.
export function balanceLineItem(label, owed) {
  return {
    quantity: 1,
    price_data: {
      currency: owed.currency,
      unit_amount: owed.amountCents,
      product_data: { name: `${label} — 50% balance` }
    }
  }
}
