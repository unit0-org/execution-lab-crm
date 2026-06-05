import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { createInvoiceFromCharge } from './createInvoiceFromCharge'
import { deliverInvoice } from './deliverInvoice'

// Issue (and maybe send) an invoice for a purchase, per the org's config.
export async function autoInvoiceForOrg(organizationId, purchase) {
  const setting = await ensureInvoiceSetting(organizationId)

  if (!setting.auto_create) return

  const invoice = await createInvoiceFromCharge(organizationId, purchase)

  if (setting.auto_send) await deliverInvoice(invoice)
}
