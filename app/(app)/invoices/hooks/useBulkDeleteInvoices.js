'use client'

import { bulkDeleteInvoicesAction } from '../actions/bulkDeleteInvoices'

const idsOf = (invoices) => invoices.map((i) => i.id)

export function useBulkDeleteInvoices(onDone) {
  return (invoices) =>
    bulkDeleteInvoicesAction(idsOf(invoices)).then(onDone)
}
