import { Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// Total earned revenue (formatted) from purchases on or after `since` —
// refunds excluded (Purchase.scope('earned')).
export async function revenueSince(since) {
  const cents = await Purchase.scope('earned').sum('amount_cents', {
    where: {
      purchased_at: { [Op.gte]: since }
    }
  })

  return formatMoney(cents, 'cad')
}
