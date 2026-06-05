'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { approveInvoiceAction } from '../actions/approveInvoice'
import { sendInvoiceAction } from '../actions/sendInvoice'
import { voidInvoiceAction } from '../actions/voidInvoice'
import { markInvoicePaidAction } from '../actions/markInvoicePaid'

const feedback = (result, ok) => showToast(result?.error || ok)

export function useInvoiceActions(id, onChanged) {
  const run = (action, ok) => () =>
    action(id).then((r) => feedback(r, ok)).then(onChanged)

  return {
    approve: run(approveInvoiceAction, 'Approved'),
    send: run(sendInvoiceAction, 'Invoice sent'),
    paid: run(markInvoicePaidAction, 'Marked paid'),
    voidIt: run(voidInvoiceAction, 'Voided')
  }
}
