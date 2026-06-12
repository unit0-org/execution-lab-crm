// Format an invoice date for emails, e.g. "June 12, 2026" (empty if none).
export function formatInvoiceDate(value) {
  if (!value) return ''

  return new Date(value).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
