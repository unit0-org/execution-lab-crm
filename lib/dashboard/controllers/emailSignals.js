import { fn, col, Op } from 'sequelize'
import { ContactEmailMessage } from '@/lib/email/models'

// Per-contact latest synced Gmail message date — one of the touches that
// counts as post-event nurturing.
export function emailSignals() {
  return ContactEmailMessage.findAll({
    attributes: ['contact_id', [fn('MAX', col('sent_at')), 'last']],
    where: { contact_id: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
