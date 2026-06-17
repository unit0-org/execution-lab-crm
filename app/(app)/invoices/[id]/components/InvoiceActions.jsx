'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { useInvoiceActions } from '../../hooks/useInvoiceActions'
import { useInvoiceSendFlow } from '../../hooks/useInvoiceSendFlow'
import { SendInvoicesModal } from '../../components/SendInvoicesModal'
import { actionsForStatus } from './actionsForStatus'

export function InvoiceActions({ invoice, onChanged }) {
  const flow = useInvoiceSendFlow(onChanged)
  const handlers = useInvoiceActions(invoice.id, onChanged)
  const send = () => flow.start([invoice])
  const buttons = actionsForStatus(invoice.status, { ...handlers, send })

  return (
    <>
      <Inline gap="sm">
        {buttons.map((b) => (
          <Button key={b.label} tone={b.tone} onClick={b.onClick}>
            {b.label}
          </Button>
        ))}
      </Inline>
      <SendInvoicesModal flow={flow} />
    </>
  )
}
