// Why an invoice can't be sent yet, or null when it's sendable.
export function invoiceSendError(invoice) {
  if (invoice.status === 'draft')
    return 'Approve the invoice before sending'

  if (invoice.status === 'void')
    return 'Voided invoices cannot be sent'

  return null
}
