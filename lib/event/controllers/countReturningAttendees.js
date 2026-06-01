import { Op } from 'sequelize'
import { EventParticipant, OwnEvent } from '../models'

// This event's checked-in contacts who also attended an earlier event.
export async function countReturningAttendees(eventId, eventDate) {
  if (!eventDate) return 0

  const here = await EventParticipant.findAll({
    where: { own_event_id: eventId, checked_in_at: { [Op.ne]: null } },
    attributes: ['contact_id'],
    raw: true
  })
  const ids = here.map((r) => r.contact_id)

  if (!ids.length) return 0

  return EventParticipant.count({
    distinct: true,
    col: 'contact_id',
    where: {
      contact_id: ids,
      own_event_id: { [Op.ne]: eventId },
      checked_in_at: { [Op.ne]: null }
    },
    include: [{ model: OwnEvent, attributes: [],
      where: { date: { [Op.lt]: eventDate } }, required: true }]
  })
}
