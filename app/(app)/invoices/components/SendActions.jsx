'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SendAllMenu } from './SendAllMenu'

export function SendActions({ draft, drafts, sending, onSend, onCancel }) {
  return (
    <Inline gap="sm" nowrap>
      <Button tone="primary" size="sm" disabled={sending}
        onClick={() => onSend([draft])}>Send</Button>
      <SendAllMenu show={drafts.length > 1} disabled={sending}
        onSendAll={() => onSend(drafts)} />
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}
