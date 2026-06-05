import { OrganizationSecret } from '@/lib/org/models'
import { decrypt } from '@/lib/secrets/cipher'
import { tryVerifyWebhook } from './tryVerifyWebhook'

// Find the org whose stored webhook secret verifies this payload.
export async function matchOrgWebhookSecret(body, signature) {
  const rows = await OrganizationSecret.findAll({
    where: { kind: 'stripe_webhook_secret' }
  })

  for (const row of rows) {
    const event = tryVerifyWebhook(body, signature, decrypt(row.ciphertext))

    if (event) return { event, organizationId: row.organization_id }
  }

  return null
}
