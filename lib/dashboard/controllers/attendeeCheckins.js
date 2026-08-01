import { fn, col, Op } from 'sequelize'
import { EventParticipant } from '@/lib/event/models'

// One row per contact who attended any of these events: when they first
// checked in, and how many of the events they attended. Participants with
// no contact are skipped — they cannot be scored or followed up.
export function attendeeCheckins(eventIds) {
  return EventParticipant.findAll({
    attributes: [
      'contact_id',
      [fn('MIN', col('checked_in_at')), 'first'],
      [fn('COUNT', col('checked_in_at')), 'checkins']
    ],
    where: {
      own_event_id: { [Op.in]: eventIds },
      checked_in_at: { [Op.ne]: null },
      contact_id: { [Op.ne]: null }
    },
    group: ['contact_id'],
    raw: true
  })
}
