'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { bulkMarkInvoicesSentAction }
  from '../actions/bulkMarkInvoicesSent'

const idsOf = (invoices) => invoices.map((i) => i.id)

export function useBulkMarkSent(onDone) {
  return (invoices) =>
    bulkMarkInvoicesSentAction(idsOf(invoices))
      .then(() => showToast('Marked sent'))
      .then(onDone)
}
