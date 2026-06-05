import { importCharge } from './importCharge'
import { orgStripeKey } from './orgStripeKey'
import { invoicePurchase } from '@/lib/invoice/controllers/invoicePurchase'

// Record a paid charge for its org, then auto-issue an invoice if enabled.
export async function handlePaidCharge(charge, organizationId) {
  const apiKey = await orgStripeKey(organizationId)
  const result = await importCharge(charge, apiKey, organizationId)

  if (result.skipped) return

  await invoicePurchase(result.purchaseId, organizationId)
}
