import { GoogleAccount } from '../models/GoogleAccount'

// The Google accounts that have contacts sync turned on.
export async function enabledAccounts() {
  const rows = await GoogleAccount.findAll({
    where: { contacts_sync_enabled: true }
  })

  return rows
}
