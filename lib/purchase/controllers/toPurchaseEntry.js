import { formatMoney } from './formatMoney'

// A purchase shaped as a contact-activity entry.
export function toPurchaseEntry(purchase) {
  const money = formatMoney(purchase.amount_cents, purchase.currency)

  return {
    id: `p:${purchase.id}`,
    kind: 'purchase',
    href: '/purchases',
    title: purchase.product || 'Purchase',
    date: purchase.purchased_at,
    status: `Bought · ${money}`,
    statusTone: 'success'
  }
}
