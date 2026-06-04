import { Op } from 'sequelize'
import { Purchase } from '../models'
import { toPurchaseRow } from './toPurchaseRow'
import { windowStart } from './purchaseWindow'

const clause = (window) => {
  const since = windowStart(window)

  return since ? { purchased_at: { [Op.gte]: since } } : undefined
}

// Purchases with their buyer contact (optionally windowed), newest first.
export async function listPurchases(window) {
  const rows = await Purchase.findAll({
    where: clause(window),
    include: [{ association: 'contact' }],
    order: [['purchased_at', 'DESC']]
  })

  return rows.map((row) => toPurchaseRow(row.toJSON()))
}
