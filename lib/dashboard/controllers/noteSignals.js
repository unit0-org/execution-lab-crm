import { fn, col, Op } from 'sequelize'
import { ContactNote } from '@/lib/contact/models'

// Per-contact latest note date — one of the touches that counts as
// post-event nurturing.
export function noteSignals() {
  return ContactNote.findAll({
    attributes: ['contact_id', [fn('MAX', col('noted_at')), 'last']],
    where: { contact_id: { [Op.ne]: null } },
    group: ['contact_id'],
    raw: true
  })
}
