'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Link } from '@/ui/atoms/Link'
import { useInvoiceActions } from '../../hooks/useInvoiceActions'
import { actionsForStatus } from './actionsForStatus'

export function InvoiceActions({ invoice, onChanged }) {
  const handlers = useInvoiceActions(invoice.id, onChanged)
  const buttons = actionsForStatus(invoice.status, handlers)

  return (
    <Inline gap="sm">
      {buttons.map((b) => (
        <Button key={b.label} tone={b.tone} onClick={b.onClick}>
          {b.label}
        </Button>
      ))}
      <Link href={`/api/invoices/${invoice.id}/pdf`}>Download PDF</Link>
    </Inline>
  )
}
