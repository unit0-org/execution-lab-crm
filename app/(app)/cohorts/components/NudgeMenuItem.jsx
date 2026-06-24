'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { useSendPaymentReminder } from '../hooks/useSendPaymentReminder'

// One operation in the registrant menu: email a payment-completion link.
export function NudgeMenuItem({ registrationId, onDone }) {
  const sendReminder = useSendPaymentReminder(registrationId)

  const nudge = () => {
    onDone()
    sendReminder()
  }

  return (
    <MenuRow leading={<Icon name="bell" size={16} />}
      label="Send payment nudge" onClick={nudge} />
  )
}
