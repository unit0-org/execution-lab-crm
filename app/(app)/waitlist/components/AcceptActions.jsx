'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'

// Send / cancel for the acceptance payment-email preview.
export function AcceptActions({ sending, onSend, onCancel }) {
  return (
    <Inline gap="sm" nowrap>
      <Button tone="primary" size="sm" loading={sending} onClick={onSend}>
        Send payment email
      </Button>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}
