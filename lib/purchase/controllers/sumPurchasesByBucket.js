import { Purchase } from '../models'
import { windowClause } from './purchaseWindow'
import { addToBuckets, toBucketRows } from './bucketTotals'

// Total spend per time bucket for a window + granularity (CAD cents).
export async function sumPurchasesByBucket(window, grain) {
  const rows = await Purchase.findAll({
    where: windowClause(window),
    attributes: ['amount_cents', 'purchased_at']
  })
  const totals = new Map()

  rows.forEach((row) => addToBuckets(totals, row.toJSON(), grain))

  return toBucketRows(totals)
}
