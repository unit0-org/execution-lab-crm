import { fn, col, Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'

// Per-contact count of paid cohort registrations. A complimentary seat is
// a paid row with amount_total 0, so this captures comp members too.
export function registrationSignals() {
  return Registration.findAll({
    attributes: [
      'contact_id',
      [fn('COUNT', col('id')), 'count']
    ],
    where: { status: 'paid', contact_id: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
