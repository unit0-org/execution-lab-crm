import { fn, col, Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'

// Per-contact latest purchase of ANY status — deliberately not the earned
// scope. This feeds the nurturing signal, where a refunded purchase still
// counts as a touch: they engaged, then changed their mind. Revenue and
// the client rule keep using Purchase.scope('earned'); a refund is not
// money, but it is contact.
export function purchaseActivity() {
  return Purchase.findAll({
    attributes: ['contact_id', [fn('MAX', col('purchased_at')), 'last']],
    where: { contact_id: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
