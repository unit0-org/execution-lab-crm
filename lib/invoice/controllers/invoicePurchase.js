import { Purchase } from '@/lib/purchase/models'
import { autoInvoiceForCharge } from './autoInvoiceForCharge'

// Auto-issue invoices for a freshly recorded Stripe purchase.
export async function invoicePurchase(purchaseId) {
  const purchase = await Purchase.findByPk(purchaseId, {
    include: [{ association: 'contact' }]
  })

  if (!purchase) return

  await autoInvoiceForCharge(purchase.toJSON())
}
