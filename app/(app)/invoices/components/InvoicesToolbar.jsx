'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { InvoiceBulkActions } from './InvoiceBulkActions'
import { SendInvoicesModal } from './SendInvoicesModal'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { bulkDeleteInvoicesAction } from '../actions/bulkDeleteInvoices'
import { useBulkMarkSent } from '../hooks/useBulkMarkSent'
import { useInvoiceSendFlow } from '../hooks/useInvoiceSendFlow'

export function InvoicesToolbar({ invoices, selection, onChanged }) {
  const refresh = () => { selection.clear(); onChanged() }
  const remove = useActionHandler(bulkDeleteInvoicesAction, { onDone: refresh })
  const markSent = useBulkMarkSent(refresh)
  const send = useInvoiceSendFlow(refresh)
  // Counted off the rows in view, so a selection made under one status
  // chip never claims rows the current chip has filtered away.
  const chosen = invoices.filter((i) => selection.ids.has(i.id))
  const count = chosen.length

  return (
    <>
      <StickyBar active={count > 0}>
        <InvoiceBulkActions key={count > 0} count={count}
          onSend={() => send.start(chosen)}
          onMarkSent={() => markSent(chosen)}
          onDelete={() => remove(chosen.map((i) => i.id))} />
      </StickyBar>
      <SendInvoicesModal flow={send} />
    </>
  )
}
