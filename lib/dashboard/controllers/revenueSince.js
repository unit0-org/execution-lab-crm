import { Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

// Total revenue (formatted) from purchases on or after `since`.
export async function revenueSince(since) {
  const cents = await Purchase.sum('amount_cents', {
    where: {
      purchased_at: { [Op.gte]: since }
    }
  })

  return formatMoney(cents, 'cad')
}
