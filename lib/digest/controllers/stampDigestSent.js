import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { saveDigestSetting } from './saveDigestSetting'

// Record that the digest just went out, for the weekly idempotency guard.
export async function stampDigestSent() {
  const organizationId = await firstOrganizationId()

  return saveDigestSetting(organizationId, { last_sent_at: new Date() })
}
