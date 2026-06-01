import { EventParticipant, OwnEvent } from '../models'
import { toStatusLabel } from './statusLabel'

// Events a contact has taken part in, most recent first.
export async function contactTimeline(contactId) {
  const rows = await EventParticipant.findAll({
    where: { contact_id: contactId },
    include: [{ model: OwnEvent }],
    order: [[OwnEvent, 'date', 'DESC']]
  })

  return rows.map((row) => toEntry(row.toJSON()))
}

function toEntry(participant) {
  const event = participant.own_event || {}

  return {
    id: participant.id,
    title: event.title || 'Untitled event',
    date: event.date,
    status: toStatusLabel(participant)
  }
}
