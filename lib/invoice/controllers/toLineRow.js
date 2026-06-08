import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// A line item shaped for display.
export function toLineRow(line, currency) {
  return {
    id: line.id,
    description: line.description,
    detail: line.detail,
    quantity: line.quantity,
    unitAmount: formatMoney(line.unit_amount_cents, currency),
    amount: formatMoney(line.amount_cents, currency)
  }
}
