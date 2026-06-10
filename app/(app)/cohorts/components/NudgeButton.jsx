'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useSendPaymentReminder } from '../hooks/useSendPaymentReminder'

// Email a pending registrant a link to finish their payment.
export function NudgeButton({ registrationId }) {
  const sendReminder = useSendPaymentReminder(registrationId)

  return (
    <IconButton label="Send payment reminder" onClick={sendReminder}>
      <Icon name="card" size={16} />
    </IconButton>
  )
}
