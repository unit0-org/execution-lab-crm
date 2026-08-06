'use client'

import { FormActions } from '@/ui/molecules/FormActions'
import { sendMenuItems } from '../hooks/sendMenuItems'

// Send this one / send them all. Both live in the shared row's split
// primary, so the batch action is a menu item on the Send button itself
// rather than a stray control beside it.
export function SendActions({ draft, drafts, sending, onSend, onCancel }) {
  const sendOne = () => onSend([draft])

  return (
    <FormActions label="Send" busy={sending} onCancel={onCancel}
      menu={sendMenuItems(drafts, onSend, sendOne)} onConfirm={sendOne} />
  )
}
