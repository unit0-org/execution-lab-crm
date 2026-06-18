// Open an invoice's PDF in a new browser tab.
export function openInvoicePdf(invoiceId) {
  window.open(`/api/invoices/${invoiceId}/pdf`, '_blank')
}
