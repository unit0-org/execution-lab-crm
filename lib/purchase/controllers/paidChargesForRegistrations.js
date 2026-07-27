import { Op } from 'sequelize'
import { Purchase } from '@/lib/purchase/models'
import { chargesForRegistration } from './chargesForRegistration'

const contactIdsOf = (registrations) =>
  registrations.map((r) => r.contact_id).filter(Boolean)

// Map each registration id to every succeeded purchase behind its seat: the
// charge that best matches its contact and date, plus each plan installment
// settled against it. A seat paid in two halves has two.
export async function paidChargesForRegistrations(registrations, chargeIds) {
  const rows = await Purchase.findAll({
    where: {
      contact_id: { [Op.in]: contactIdsOf(registrations) },
      status: 'succeeded'
    }
  })
  const purchases = rows.map((p) => p.toJSON())

  return new Map(registrations.map((r) =>
    [r.id, chargesForRegistration(r, purchases, chargeIds.get(r.id))]))
}
