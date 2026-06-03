import { Purchase } from '../models'
import { toPurchaseRow } from './toPurchaseRow'

// All purchases with their buyer contact, newest first.
export async function listPurchases() {
  const rows = await Purchase.findAll({
    include: [{ association: 'contact' }],
    order: [['purchased_at', 'DESC']]
  })

  return rows.map((row) => toPurchaseRow(row.toJSON()))
}
