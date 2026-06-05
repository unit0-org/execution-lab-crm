import { listSucceededCharges } from '@/lib/stripe/listSucceededCharges'
import { importCharge } from './importCharge'

// Import every succeeded Stripe charge. A failing or email-less charge
// is counted as skipped, never aborting the rest of the backfill.
export async function backfillCharges(apiKey, organizationId) {
  const charges = await listSucceededCharges(apiKey)
  let imported = 0
  let skipped = 0

  for (const charge of charges) {
    try {
      const result = await importCharge(charge, apiKey, organizationId)

      if (result.skipped) skipped += 1
      else imported += 1
    } catch {
      skipped += 1
    }
  }

  return { imported, skipped }
}
