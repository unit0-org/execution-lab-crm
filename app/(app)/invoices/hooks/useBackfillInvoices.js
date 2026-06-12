'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { backfillInvoicesAction } from '../actions/backfillInvoices'

// Generate draft invoices for purchases that lack one, then refresh the
// list and toast how many were created.
export function useBackfillInvoices(onDone) {
  const run = () => {
    backfillInvoicesAction().then((res) => {
      showToast(`Created ${res.created} draft invoice(s)`)
      onDone()
    })
  }

  return run
}
