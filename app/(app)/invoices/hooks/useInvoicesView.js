'use client'

import { useSearchParams } from 'next/navigation'
import { useRowSelection } from '@/ui/molecules/useRowSelection'
import { useInvoices } from './useInvoices'
import { filterInvoicesByStatus } from './filterInvoicesByStatus'

// The invoices page's state: every loaded invoice (the pending total is
// the whole list's, not the filtered view's), the status chip active in
// the URL, the rows it leaves visible, and the selection over them.
export function useInvoicesView(initialInvoices) {
  const { invoices, reload } = useInvoices(initialInvoices)
  const status = useSearchParams().get('status')
  const shown = filterInvoicesByStatus(invoices, status)
  const selection = useRowSelection(shown)

  return { invoices, status, shown, selection, reload }
}
