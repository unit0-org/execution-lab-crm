import { Op } from 'sequelize'
import { EventParticipant } from '@/lib/event/models'

// Every check-in across these events as (event, contact, when) rows — the
// raw material for each event's own conversion rate.
export function eventAttendeeRows(eventIds) {
  return EventParticipant.findAll({
    attributes: ['own_event_id', 'contact_id', 'checked_in_at'],
    where: {
      own_event_id: { [Op.in]: eventIds },
      checked_in_at: { [Op.ne]: null },
      contact_id: { [Op.ne]: null }
    },
    raw: true
  })
}
