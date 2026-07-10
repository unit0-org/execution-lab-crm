import { fn, col, Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'

// Per-contact date of their first paid cohort registration.
export function firstPaidRegistrations() {
  return Registration.findAll({
    attributes: ['contact_id', [fn('MIN', col('paid_at')), 'first']],
    where: { status: 'paid', contact_id: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
