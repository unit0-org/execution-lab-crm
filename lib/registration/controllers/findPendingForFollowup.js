import { Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'
import { followupWindow } from './followupWindow'

// Still-pending registrations old enough to chase but not stale, that have
// not had an automatic payment follow-up yet — as plain objects. A
// staff-reserved seat is deliberately excluded: this chase is for someone
// who abandoned checkout and it talks about a 2-hour hold, which is not
// their deal. Reservations get their own pre-release warning instead
// (sendReservationReminders).
export function findPendingForFollowup() {
  const { after, before } = followupWindow()

  return Registration.findAll({
    where: {
      status: 'pending',
      reserved_at: null,
      payment_followup_sent_at: null,
      created_at: { [Op.gte]: after, [Op.lte]: before }
    }
  }).then((rows) => rows.map((row) => row.toJSON()))
}
