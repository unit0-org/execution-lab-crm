'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Text } from '@/ui/atoms/Text'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useToggle } from '@/ui/molecules/useToggle'

export function InvoiceBulkActions({ count, onSend, onMarkSent, onDelete }) {
  const confirm = useToggle()
  const run = () => { confirm.hide(); onDelete() }

  return (
    <Inline gap="md">
      <Text size="sm">{count} selected</Text>
      <Button tone="primary" size="sm" onClick={onSend}>Send</Button>
      <Button size="sm" onClick={onMarkSent}>Mark sent</Button>
      <Button tone="danger" size="sm" onClick={confirm.show}>Remove</Button>
      <ConfirmDialog open={confirm.open} title={`Remove ${count}?`}
        onConfirm={run} onCancel={confirm.hide} />
    </Inline>
  )
}
