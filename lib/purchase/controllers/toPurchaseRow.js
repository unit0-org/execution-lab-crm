import { formatMoney } from './formatMoney'

const buyerName = (p) => {
  const c = p.contact || {}
  const name = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return name || p.email || 'Unknown'
}

// A purchase shaped for the Purchases table.
export function toPurchaseRow(purchase) {
  return {
    id: purchase.id,
    product: purchase.product,
    amount: formatMoney(purchase.amount_cents, purchase.currency),
    date: purchase.purchased_at,
    buyer: buyerName(purchase),
    contactId: purchase.contact_id,
    refunded: purchase.status === 'refunded'
  }
}
