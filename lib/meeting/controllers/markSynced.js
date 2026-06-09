import { GoogleAccount } from '@/lib/google/models/GoogleAccount'

// Stamp the account's last sync time as now; return the new value.
export async function markSynced(organizationId, email) {
  const now = new Date()

  await GoogleAccount.update(
    { last_synced_at: now },
    { where: { email, organization_id: organizationId } }
  )

  return now.toISOString()
}
