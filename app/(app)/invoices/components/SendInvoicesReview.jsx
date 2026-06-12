'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { Button } from '@/ui/atoms/Button'
import { InvoiceSendCard } from './InvoiceSendCard'
import { SendPager } from './SendPager'

const noun = (n) => (n === 1 ? 'invoice' : 'invoices')

export function SendInvoicesReview({ drafts, sending, onEdit, onConfirm,
  onCancel }) {
  const [at, setAt] = useState(0)
  const draft = drafts[at] || drafts[0]

  return (
    <Stack gap="md">
      <Heading level={2}>Send {drafts.length} {noun(drafts.length)}</Heading>
      <SendPager at={at} total={drafts.length} onMove={setAt} />
      <InvoiceSendCard key={draft.id} draft={draft} onEdit={onEdit} />
      <Inline gap="sm">
        <Button tone="primary" size="sm" disabled={sending}
          onClick={onConfirm}>Send</Button>
        <Button size="sm" onClick={onCancel}>Cancel</Button>
      </Inline>
    </Stack>
  )
}
