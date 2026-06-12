'use client'

import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { Button } from '@/ui/atoms/Button'
import { InvoiceEmailPreview } from './InvoiceEmailPreview'

export function SendInvoicesReview({ previews, sending, onConfirm, onCancel }) {
  return (
    <Stack gap="md">
      <Heading level={2}>Send {previews.length} invoices</Heading>
      <Stack gap="sm">
        {previews.map((p) => (
          <InvoiceEmailPreview key={p.id} preview={p} />
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
