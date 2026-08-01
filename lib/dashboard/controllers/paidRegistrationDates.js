import { fn, col, Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'

// Per-contact earliest paid registration — the other way a contact becomes
// a client (see customerRule), independent of purchase size.
export function paidRegistrationDates() {
  return Registration.findAll({
    attributes: ['contact_id', [fn('MIN', col('paid_at')), 'first']],
    where: { contact_id: { [Op.ne]: null }, paid_at: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
