import { GoogleAccount } from '@/lib/google/models/GoogleAccount'

// Stamp the account's last sync time as now; return the new value.
export async function markSynced(email) {
  const now = new Date()

  await GoogleAccount.update(
    { last_synced_at: now },
    { where: { email } }
  )

  return now.toISOString()
}
