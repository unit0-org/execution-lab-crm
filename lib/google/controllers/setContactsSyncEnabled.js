import { GoogleAccount } from '../models/GoogleAccount'

// Toggle Google Contacts sync for one account.
export async function setContactsSyncEnabled(id, enabled) {
  await GoogleAccount.update(
    { contacts_sync_enabled: enabled },
    { where: { id } }
  )

  return { ok: true }
}
