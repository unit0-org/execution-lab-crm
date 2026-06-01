import { fn, col } from 'sequelize'
import { EventParticipant } from '../models'
import { countReturningAttendees } from './countReturningAttendees'

// Registered/checked-in totals plus the returning-attendee count.
export async function eventStats(eventId) {
  const totals = await EventParticipant.findOne({
    where: { own_event_id: eventId },
    attributes: [
      [fn('COUNT', col('registered_at')), 'registered'],
      [fn('COUNT', col('checked_in_at')), 'checked_in']
    ],
    raw: true
  })

  return {
    registered: Number(totals.registered),
    checked_in: Number(totals.checked_in),
    returning: await countReturningAttendees(eventId)
  }
}
