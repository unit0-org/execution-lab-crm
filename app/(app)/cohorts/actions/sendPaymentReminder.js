'use server'

import { withMember } from '@/lib/auth/withMember'
import { sendPaymentReminder } from '@/lib/registration/controllers'

export const sendPaymentReminderAction = withMember(
  (registrationId) =>
    sendPaymentReminder(registrationId)
)
