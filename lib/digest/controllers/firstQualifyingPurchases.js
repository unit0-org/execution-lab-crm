import { fn, col, Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'
import { CUSTOMER_MIN_PURCHASE_CENTS }
  from '@/lib/dashboard/controllers/customerRule'

// Per-contact date of their first qualifying (>= $100) earned purchase.
export function firstQualifyingPurchases() {
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
