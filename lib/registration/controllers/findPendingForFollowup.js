import { Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'
import { followupWindow } from './followupWindow'

// Still-pending registrations old enough to chase but not stale, that have
// not had an automatic payment follow-up yet — as plain objects.
export function findPendingForFollowup() {
  const { after, before } = followupWindow()

  return Registration.findAll({
    where: {
      status: 'pending',
      payment_followup_sent_at: null,
      created_at: { [Op.gte]: after, [Op.lte]: before }
    }
  }).then((rows) => rows.map((row) => row.toJSON()))
}
