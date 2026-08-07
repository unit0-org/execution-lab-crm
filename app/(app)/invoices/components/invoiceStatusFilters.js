// The invoice list's status chips, in lifecycle order. "Unpaid" is the
// money-still-owed group (approved + sent) the pending-payments tile
// sums, so clicking that tile lands on exactly the rows it counted.
export const INVOICE_STATUS_FILTERS = [
  { value: 'unpaid', label: 'Unpaid' },
  { value: 'draft', label: 'Draft' },
  { value: 'approved', label: 'Approved' },
  { value: 'sent', label: 'Sent' },
  { value: 'paid', label: 'Paid' },
  { value: 'void', label: 'Void' }
]
