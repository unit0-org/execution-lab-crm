'use client'

import { FormActions } from '@/ui/molecules/FormActions'
import { SendAllMenu } from './SendAllMenu'

// Send this one / send them all / cancel. "Send all" rides in the shared
// row's extra slot so the three sit where every dialog's buttons sit.
export function SendActions({ draft, drafts, sending, onSend, onCancel }) {
  const sendAll = (
    <SendAllMenu show={drafts.length > 1} disabled={sending}
      onSendAll={() => onSend(drafts)} />
  )

  return (
    <FormActions label="Send" busy={sending} extra={sendAll}
      onCancel={onCancel} onConfirm={() => onSend([draft])} />
  )
}
