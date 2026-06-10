'use client'

import { TextButton } from '@/ui/atoms/TextButton'
import { useSendPaymentReminder } from '../hooks/useSendPaymentReminder'

// One operation in the registrant menu: email a payment-completion link.
export function NudgeMenuItem({ registrationId, onDone }) {
  const sendReminder = useSendPaymentReminder(registrationId)

  const nudge = () => {
    onDone()
    sendReminder()
  }

  return (
    <TextButton type="button" onClick={nudge}>Send payment nudge</TextButton>
  )
}
