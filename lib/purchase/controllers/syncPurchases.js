import { listPaidSessions } from '@/lib/stripe/listPaidSessions'
import { importSession } from './importSession'

// Backfill every paid Checkout Session into purchases.
export async function syncPurchases() {
  const sessions = await listPaidSessions()
  let imported = 0

  for (const session of sessions) {
    const { skipped } = await importSession(session)

    if (!skipped) imported += 1
  }

  return { imported }
}
