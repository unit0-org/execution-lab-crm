import { Purchase } from '../models'
import { toPurchaseRow } from './toPurchaseRow'
import { windowClause } from './purchaseWindow'

// An org's purchases with their buyer contact (optionally windowed),
// newest first.
export async function listPurchases(organizationId, window) {
  const rows = await Purchase.findAll({
    where: { organization_id: organizationId, ...windowClause(window) },
    include: [{ association: 'contact' }],
    order: [['purchased_at', 'DESC']]
  })

  return rows.map((row) => toPurchaseRow(row.toJSON()))
}
