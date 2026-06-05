import { InvoiceSetting } from '../models'
import { createInvoiceFromCharge } from './createInvoiceFromCharge'
import { deliverInvoice } from './deliverInvoice'

// For each org with auto-create on, issue an invoice for the purchase
// (and deliver it when auto-send is on too).
export async function autoInvoiceForCharge(purchase) {
  const settings = await InvoiceSetting.findAll({
    where: { auto_create: true }
  })

  for (const setting of settings) {
    const invoice =
      await createInvoiceFromCharge(setting.organization_id, purchase)

    if (setting.auto_send) await deliverInvoice(invoice)
  }
}
