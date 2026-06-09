import { GoogleAccount } from '../models/GoogleAccount'

// Toggle Google Contacts sync for one of the org's accounts.
export async function setContactsSyncEnabled(organizationId, id, enabled) {
  await GoogleAccount.update(
    { contacts_sync_enabled: enabled },
    { where: { organization_id: organizationId, id } }
  )

  return { ok: true }
}
