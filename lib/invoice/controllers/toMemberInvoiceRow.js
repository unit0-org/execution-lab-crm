import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// An invoice shaped for the member billing list: only what a customer
// needs — its number, date, status, total and a link to its PDF.
export function toMemberInvoiceRow(invoice) {
  return {
    id: invoice.id,
    number: invoice.number,
    date: invoice.issued_at || invoice.created_at,
    status: invoice.status,
    total: formatMoney(invoice.total_cents, invoice.currency),
    pdfHref: `/api/invoices/${invoice.id}/pdf`
  }
}
