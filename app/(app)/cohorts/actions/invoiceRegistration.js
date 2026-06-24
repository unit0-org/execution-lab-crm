'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { invoiceRegistration } from '@/lib/registration/controllers'

export const invoiceRegistrationAction = withOrg(
  (organizationId, registrationId, amount) =>
    invoiceRegistration(organizationId, registrationId, amount)
)
