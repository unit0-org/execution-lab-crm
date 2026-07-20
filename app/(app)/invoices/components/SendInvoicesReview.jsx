'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Pager } from '@/ui/molecules/Pager'
import { InvoiceSendCard } from './InvoiceSendCard'
import { SendActions } from './SendActions'

const noun = (n) => (n === 1 ? 'invoice' : 'invoices')

export function SendInvoicesReview({ drafts, sending, onEdit, onSend,
  onCancel }) {
  const [at, setAt] = useState(0)
  const draft = drafts[at] || drafts[0]

  return (
    <Stack gap="md">
      <Heading level={2}>Send {drafts.length} {noun(drafts.length)}</Heading>
      <Pager at={at} total={drafts.length} onMove={setAt} label="invoice" />
      <InvoiceSendCard key={draft.id} draft={draft} onEdit={onEdit} />
      <SendActions draft={draft} drafts={drafts} sending={sending}
        onSend={onSend} onCancel={onCancel} />
    </Stack>
  )
}
