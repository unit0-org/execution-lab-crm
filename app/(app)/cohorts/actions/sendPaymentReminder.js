'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { sendPaymentReminder } from '@/lib/registration/controllers'

export const sendPaymentReminderAction = withOrg(
  (organizationId, registrationId) =>
    sendPaymentReminder(organizationId, registrationId)
)
