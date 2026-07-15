import { Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'
import { nearestPurchase } from './nearestPurchase'

const contactIdsOf = (registrations) =>
  registrations.map((r) => r.contact_id).filter(Boolean)

// Map each registration id to the succeeded purchase that best matches its
// contact and date — the real charge behind the seat, or null when none.
export async function paidChargesForRegistrations(registrations) {
  const rows = await Purchase.findAll({
    where: {
      contact_id: { [Op.in]: contactIdsOf(registrations) },
      status: 'succeeded'
    }
  })
  const purchases = rows.map((p) => p.toJSON())

  return new Map(
    registrations.map((r) => [r.id, nearestPurchase(r, purchases)])
  )
}
