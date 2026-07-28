'use client'

import { FormActions } from '@/ui/molecules/FormActions'

// Send / cancel for the acceptance payment-email preview.
export function AcceptActions({ sending, onSend, onCancel }) {
  return (
    <FormActions label="Send payment email" busy={sending}
      onCancel={onCancel} onConfirm={onSend} />
  )
}
