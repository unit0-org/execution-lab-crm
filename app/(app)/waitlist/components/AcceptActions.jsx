'use client'

import { EndRow } from '@/ui/layout/EndRow'
import { Button } from '@/ui/atoms/Button'

// Send / cancel for the acceptance payment-email preview.
export function AcceptActions({ sending, onSend, onCancel }) {
  return (
    <EndRow>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
      <Button tone="primary" size="sm" loading={sending} onClick={onSend}>
        Send payment email
      </Button>
    </EndRow>
  )
}
