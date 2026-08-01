import { fn, col, Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'
import { CUSTOMER_MIN_PURCHASE_CENTS } from './customerRule'

// Per-contact earliest purchase big enough to make them a client (the
// $100 rule in customerRule); refunds are excluded by the earned scope.
export function qualifyingPurchaseDates() {
  return Purchase.scope('earned').findAll({
    attributes: ['contact_id', [fn('MIN', col('purchased_at')), 'first']],
    where: {
      contact_id: { [Op.ne]: null },
      amount_cents: { [Op.gte]: CUSTOMER_MIN_PURCHASE_CENTS }
    },
    group: ['contact_id'],
    raw: true
  })
}
