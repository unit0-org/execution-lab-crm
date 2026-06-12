'use client'

import { useState } from 'react'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Text } from '@/ui/atoms/Text'
import { ConfirmBulkDelete } from '@/ui/molecules/ConfirmBulkDelete'

export function InvoiceBulkActions({ count, onSend, onMarkSent, onDelete }) {
  const [confirming, setConfirming] = useState(false)

  if (confirming) {
    return <ConfirmBulkDelete count={count} onDelete={onDelete}
      onCancel={() => setConfirming(false)} />
  }

  return (
    <Inline gap="md">
      <Text size="sm">{count} selected</Text>
      <Button tone="primary" size="sm" onClick={onSend}>Send</Button>
      <Button size="sm" onClick={onMarkSent}>Mark sent</Button>
      <Button tone="danger" size="sm"
        onClick={() => setConfirming(true)}>Remove</Button>
    </Inline>
  )
}
