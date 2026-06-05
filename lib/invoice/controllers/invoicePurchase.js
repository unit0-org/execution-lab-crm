import { Purchase } from '@/lib/purchase/models'
import { autoInvoiceForOrg } from './autoInvoiceForOrg'

// Auto-issue an invoice for a freshly recorded purchase, for its org.
export async function invoicePurchase(purchaseId, organizationId) {
  const purchase = await Purchase.findByPk(purchaseId, {
    include: [{ association: 'contact' }]
  })

  if (!purchase) return

  await autoInvoiceForOrg(organizationId, purchase.toJSON())
}
