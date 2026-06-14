import { backfillCharges } from './backfillCharges'
import { lastSyncedAt } from '@/lib/sync/controllers/lastSyncedAt'
import { markSynced } from '@/lib/sync/controllers/markSynced'
import { isFresh } from '@/lib/sync/controllers/isFresh'

const DAY_MS = 24 * 60 * 60 * 1000

// Backfill Stripe charges (with the Stripe key), throttled to once a day
// unless forced. Returns counts plus the latest sync time for the UI.
export async function syncPurchases(force, apiKey) {
  const last = await lastSyncedAt('purchases')

  if (!force && isFresh(last, DAY_MS)) {
    return { skipped: true, lastSyncedAt: last }
  }

  const counts = await backfillCharges(apiKey)
  const at = await markSynced('purchases')

  return { ...counts, lastSyncedAt: at }
}
