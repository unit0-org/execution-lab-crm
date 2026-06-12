import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// The {{vars}} the editable invoice email template can use.
export function invoiceEmailVars(invoice, url) {
  return {
    number: invoice.number,
    total: formatMoney(invoice.total_cents, invoice.currency),
    view_url: url || ''
  }
}
