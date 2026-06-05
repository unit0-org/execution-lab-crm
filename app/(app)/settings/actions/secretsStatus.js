'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { hasOrgSecret } from '@/lib/org/controllers/hasOrgSecret'

export async function secretsStatusAction() {
  const member = await currentMembership()

  if (member?.role !== 'admin') return {}

  const org = member.organizationId

  return {
    stripe_secret_key: await hasOrgSecret(org, 'stripe_secret_key'),
    stripe_webhook_secret: await hasOrgSecret(org, 'stripe_webhook_secret'),
    resend_api_key: await hasOrgSecret(org, 'resend_api_key')
  }
}
