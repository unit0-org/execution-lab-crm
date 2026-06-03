import { listSucceededCharges } from '@/lib/stripe/listSucceededCharges'
import { importCharge } from './importCharge'

// Backfill every succeeded Stripe charge. A single failing charge is
// counted and skipped — it never aborts the rest of the backfill.
export async function syncPurchases() {
  const charges = await listSucceededCharges()
  let imported = 0
  let failed = 0

  for (const charge of charges) {
    try {
      const { skipped } = await importCharge(charge)

      if (!skipped) imported += 1
    } catch {
      failed += 1
    }
  }

  return { imported, failed }
}
