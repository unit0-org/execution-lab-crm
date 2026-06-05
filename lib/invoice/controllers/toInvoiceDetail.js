import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { toLineRow } from './toLineRow'

const byPosition = (a, b) => a.position - b.position

// An invoice with money formatted and lines ordered, for the detail view.
export function toInvoiceDetail(invoice) {
  const lines = [...(invoice.line || [])].sort(byPosition)

  return {
    ...invoice,
    subtotal: formatMoney(invoice.subtotal_cents, invoice.currency),
    tax: formatMoney(invoice.tax_cents, invoice.currency),
    total: formatMoney(invoice.total_cents, invoice.currency),
    lines: lines.map((line) => toLineRow(line, invoice.currency))
  }
}
