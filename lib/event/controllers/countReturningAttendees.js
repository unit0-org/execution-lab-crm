import { Op } from 'sequelize'
import { EventParticipant } from '../models'

// How many of this event's contacts also appear at another event.
export async function countReturningAttendees(eventId) {
  const rows = await EventParticipant.findAll({
    where: { own_event_id: eventId },
    attributes: ['contact_id'],
    raw: true
  })
  const contactIds = rows.map((r) => r.contact_id)

  if (!contactIds.length) return 0

  return EventParticipant.count({
    where: { contact_id: contactIds, own_event_id: { [Op.ne]: eventId } },
    distinct: true,
    col: 'contact_id'
  })
}
