import { Invoice } from '../models'
import { assignInvoiceNumber } from './assignInvoiceNumber'
import { addInvoiceLine } from './addInvoiceLine'
import { chargeInvoiceAttrs } from './chargeInvoiceAttrs'

const lineFor = (p) => ({
  description: p.product || 'Purchase',
  quantity: 1,
  unitAmountCents: p.amount_cents || 0
})

// Create a paid invoice for a stored Stripe purchase, at most once.
export async function createInvoiceFromCharge(organizationId, purchase) {
  const existing = await Invoice.findOne({
    where: { stripe_charge_id: purchase.stripe_id }
  })

  if (existing) return existing

  const number = await assignInvoiceNumber(organizationId)
  const attrs = chargeInvoiceAttrs(organizationId, number, purchase)
  const invoice = await Invoice.create(attrs)

  await addInvoiceLine(invoice.id, lineFor(purchase))

  return invoice
}
