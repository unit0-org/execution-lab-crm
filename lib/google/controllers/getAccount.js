import { GoogleAccount } from '../models/GoogleAccount'

// The org's Google account for this email, or null if not connected.
export async function getAccount(organizationId, email) {
  const row = await GoogleAccount.findOne({
    where: { email, organization_id: organizationId }
  })

  return row ? row.toJSON() : null
}
