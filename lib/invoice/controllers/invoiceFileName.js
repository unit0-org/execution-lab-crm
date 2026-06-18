const datePrefix = (number) => {
  const match = (number || '').match(/(\d{4})(\d{2})(\d{2})/)

  return match ? `${match[1]}-${match[2]}-${match[3]} - ` : ''
}

// The Drive filename for an invoice: "YYYY-MM-DD - INV-….pdf". The date is
// pulled from the invoice number (INV-YYYYMMDD-…) so it always matches it.
export function invoiceFileName(invoice) {
  return `${datePrefix(invoice.number)}${invoice.number}.pdf`
}
