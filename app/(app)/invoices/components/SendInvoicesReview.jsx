'use client'

import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { Button } from '@/ui/atoms/Button'
import { InvoiceSendCard } from './InvoiceSendCard'

const noun = (n) => (n === 1 ? 'invoice' : 'invoices')

export function SendInvoicesReview({ drafts, sending, onEdit, onConfirm,
  onCancel }) {
  return (
    <Stack gap="md">
      <Heading level={2}>Send {drafts.length} {noun(drafts.length)}</Heading>
      <Stack gap="sm">
        {drafts.map((draft) => (
          <InvoiceSendCard key={draft.id} draft={draft} onEdit={onEdit} />
        ))}
      </Stack>
      <Inline gap="sm">
        <Button tone="primary" size="sm" disabled={sending}
          onClick={onConfirm}>Send</Button>
        <Button size="sm" onClick={onCancel}>Cancel</Button>
      </Inline>
    </Stack>
  )
}
