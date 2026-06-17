import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { createInvoiceFromCharge } from './createInvoiceFromCharge'
import { approveInvoice } from './approveInvoice'
import { markInvoicePaid } from './markInvoicePaid'
import { sendInvoice } from './sendInvoice'

// Issue an invoice for a purchase: create it, auto-approve (which files the
// PDF on Drive), mark it paid (the charge already cleared), and send it when
// the org opted into auto-send.
export async function autoInvoiceForOrg(organizationId, purchase) {
  const setting = await ensureInvoiceSetting(organizationId)

  if (!setting.auto_create) return

  const invoice = await createInvoiceFromCharge(organizationId, purchase)

  await approveInvoice(invoice.id)
  await markInvoicePaid(invoice.id)

  if (setting.auto_send) await sendInvoice(invoice.id)
}
