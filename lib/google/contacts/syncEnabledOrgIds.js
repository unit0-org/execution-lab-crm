import { GoogleAccount } from '../models/GoogleAccount'

// Distinct org ids that have at least one contacts-sync-enabled account.
export async function syncEnabledOrgIds() {
  const rows = await GoogleAccount.findAll({
    where: { contacts_sync_enabled: true },
    attributes: ['organization_id'],
    group: ['organization_id']
  })

  return rows.map((r) => r.organization_id)
}
