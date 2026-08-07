// The rows a status chip shows: everything when no chip is active, the
// unpaid group, or one exact status. The `unpaid` flag is set on the
// row by the server, so the chip and the pending total can't disagree.
export function filterInvoicesByStatus(invoices, status) {
  if (!status) return invoices

  if (status === 'unpaid') return invoices.filter((row) => row.unpaid)

  return invoices.filter((row) => row.status === status)
}
