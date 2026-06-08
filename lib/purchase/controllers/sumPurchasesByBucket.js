import { Purchase } from '../models'
import { windowClause } from './purchaseWindow'
import { addToBuckets, toBucketRows } from './bucketTotals'

// Total spend per time bucket for an org's window + grain (CAD cents).
export async function sumPurchasesByBucket(organizationId, window, grain) {
  const rows = await Purchase.findAll({
    where: { organization_id: organizationId, ...windowClause(window) },
    attributes: ['amount_cents', 'purchased_at', 'status']
  })
  const totals = new Map()
  const earned = rows.filter((row) => row.status !== 'refunded')

  earned.forEach((row) => addToBuckets(totals, row.toJSON(), grain))

  return toBucketRows(totals)
}
