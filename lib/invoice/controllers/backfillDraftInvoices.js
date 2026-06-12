import { createInvoiceFromCharge } from './createInvoiceFromCharge'
import { purchasesWithoutInvoice } from './purchasesWithoutInvoice'

// Create a draft invoice for every purchase that has none yet, numbered
// to the purchase date. Idempotent: already-invoiced purchases are
// skipped, so it's safe to run more than once.
export async function backfillDraftInvoices(organizationId) {
  const purchases = await purchasesWithoutInvoice(organizationId)

  for (const purchase of purchases)
    await createInvoiceFromCharge(organizationId, purchase.toJSON())

  return { created: purchases.length }
}
