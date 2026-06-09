import { GoogleAccount } from '../models/GoogleAccount'

// The org's Google accounts that have contacts sync turned on.
export async function enabledAccounts(organizationId) {
  const rows = await GoogleAccount.findAll({
    where: { organization_id: organizationId, contacts_sync_enabled: true }
  })

  return rows
}
