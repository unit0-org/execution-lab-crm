'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { hasOrgSecret } from '@/lib/org/controllers/hasOrgSecret'

export const secretsStatusAction = withAdmin(
  async (organizationId) => ({
    stripe_secret_key:
      await hasOrgSecret(organizationId, 'stripe_secret_key'),
    stripe_webhook_secret:
      await hasOrgSecret(organizationId, 'stripe_webhook_secret'),
    resend_api_key: await hasOrgSecret(organizationId, 'resend_api_key'),
    google_service_account_json:
      await hasOrgSecret(organizationId, 'google_service_account_json')
  }),
  {}
)
