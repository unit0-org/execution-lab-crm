import { importCharge } from './importCharge'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { invoicePurchase } from '@/lib/invoice/controllers/invoicePurchase'

// Record a paid charge, then auto-issue an invoice if enabled. The org is
// only forwarded to invoicing, which stays organization-scoped (billing).
export async function handlePaidCharge(charge, organizationId) {
  const apiKey = stripeApiKey()
  const result = await importCharge(charge, apiKey)

  if (result.skipped) return

  await invoicePurchase(result.purchaseId, organizationId)
}
