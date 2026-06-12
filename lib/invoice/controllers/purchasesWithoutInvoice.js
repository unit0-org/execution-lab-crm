import { Purchase } from '@/lib/purchase/models'
import { Invoice } from '../models'

// Org purchases that don't yet have an invoice (matched by charge id),
// each with its contact loaded for the bill-to name.
export async function purchasesWithoutInvoice(organizationId) {
  const invoices = await Invoice.findAll({
    where: { organization_id: organizationId },
    attributes: ['stripe_charge_id']
  })
  const invoiced = new Set(
    invoices.map((row) => row.stripe_charge_id).filter(Boolean)
  )
  const purchases = await Purchase.findAll({
    where: { organization_id: organizationId },
    include: [{ association: 'contact' }]
  })

  return purchases.filter((p) => p.stripe_id && !invoiced.has(p.stripe_id))
}
