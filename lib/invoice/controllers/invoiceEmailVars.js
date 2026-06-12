import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { invoiceProductLabel } from './invoiceProductLabel'
import { formatInvoiceDate } from './formatInvoiceDate'

// The {{vars}} the editable invoice email template can use.
export async function invoiceEmailVars(invoice, url) {
  return {
    number: invoice.number,
    total: formatMoney(invoice.total_cents, invoice.currency),
    product: await invoiceProductLabel(invoice.id),
    date: formatInvoiceDate(invoice.issued_at || invoice.created_at),
    view_url: url || ''
  }
}
