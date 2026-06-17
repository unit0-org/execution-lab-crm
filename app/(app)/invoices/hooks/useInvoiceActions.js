'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { approveInvoiceAction } from '../actions/approveInvoice'
import { voidInvoiceAction } from '../actions/voidInvoice'
import { markInvoicePaidAction } from '../actions/markInvoicePaid'

const feedback = (result, ok) => showToast(result?.error || ok)

export function useInvoiceActions(id, onChanged) {
  const run = (action, ok) => () =>
    action(id).then((r) => feedback(r, ok)).then(onChanged)

  return {
    approve: run(approveInvoiceAction, 'Approved'),
    paid: run(markInvoicePaidAction, 'Marked paid'),
    voidIt: run(voidInvoiceAction, 'Voided')
  }
}
