import { Purchase } from '../models'
import { windowClause } from './purchaseWindow'
import { addToBuckets, toBucketRows } from './bucketTotals'

// Total earned spend per time bucket for a window + grain (CAD cents);
// refunds excluded via Purchase.scope('earned').
export async function sumPurchasesByBucket(window, grain) {
  const rows = await Purchase.scope('earned').findAll({
    where: { ...windowClause(window) },
    attributes: ['amount_cents', 'purchased_at']
  })
  const totals = new Map()

  rows.forEach((row) => addToBuckets(totals, row.toJSON(), grain))

  return toBucketRows(totals)
}
