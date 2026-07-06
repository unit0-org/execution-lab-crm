import { fn, col, Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'

// Per-contact earned-purchase count, total + biggest amount, and first/last
// dates (refunds excluded via Purchase.scope('earned')).
export function purchaseSignals() {
  return Purchase.scope('earned').findAll({
    attributes: [
      'contact_id',
      [fn('COUNT', col('id')), 'count'],
      [fn('SUM', col('amount_cents')), 'total'],
      [fn('MAX', col('amount_cents')), 'max'],
      [fn('MIN', col('purchased_at')), 'first'],
      [fn('MAX', col('purchased_at')), 'last']
    ],
    where: { contact_id: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
