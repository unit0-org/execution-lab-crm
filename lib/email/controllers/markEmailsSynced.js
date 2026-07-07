import { GoogleAccount } from '@/lib/google/models/GoogleAccount'

// Stamp the account's email sync watermark as now; return the new value.
export async function markEmailsSynced(email) {
  const now = new Date()

  await GoogleAccount.update(
    { emails_synced_at: now },
    { where: { email } }
  )

  return now.toISOString()
}
