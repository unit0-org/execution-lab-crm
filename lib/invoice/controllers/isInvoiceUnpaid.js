// Money still owed: an invoice finalized for the client but not yet
// paid. A draft isn't owed yet (it was never issued) and a void one
// never will be, so neither counts toward pending payments. Defined
// once here — the list row, the "Unpaid" filter and the pending total
// all read the same rule.
const UNPAID_STATUSES = ['approved', 'sent']

export function isInvoiceUnpaid(status) {
  return UNPAID_STATUSES.includes(status)
}
