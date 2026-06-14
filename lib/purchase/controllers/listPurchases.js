import { Purchase } from '../models'
import { toPurchaseRow } from './toPurchaseRow'
import { windowClause } from './purchaseWindow'

// Purchases with their buyer contact (optionally windowed), newest first.
export async function listPurchases(window) {
  const rows = await Purchase.findAll({
    where: { ...windowClause(window) },
    include: [{ association: 'contact' }],
    order: [['purchased_at', 'DESC']]
  })

  return rows.map((row) => toPurchaseRow(row.toJSON()))
}
