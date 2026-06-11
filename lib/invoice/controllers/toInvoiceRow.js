import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

const clientName = (inv) => {
  const c = inv.contact || {}
  const name = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return name || inv.bill_to_name || inv.bill_to_email || 'Unknown'
}

// An invoice shaped for the invoices table.
export function toInvoiceRow(invoice) {
  return {
    id: invoice.id,
    number: invoice.number,
    client: clientName(invoice),
    contactId: invoice.contact_id,
    total: formatMoney(invoice.total_cents, invoice.currency),
    status: invoice.status,
    date: invoice.issued_at || invoice.created_at
  }
}
