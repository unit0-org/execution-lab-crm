import { EventParticipant, OwnEvent } from '../models'
import { Contact, ContactEmail } from '@/lib/contact/models'
import { participationWhere } from './participationWhere'
import { toParticipantRow } from './toParticipantRow'

// Participations across every event, newest event first, optionally
// narrowed to some attendance statuses and some events. One row per
// participation — the same person appears once per event they took part
// in, because a participation is what you select and remove here.
export async function listParticipants(statuses, events) {
  const rows = await EventParticipant.findAll({
    where: participationWhere(statuses, events) || {},
    include: [
      {
        model: Contact, as: 'contact',
        include: [{ model: ContactEmail, as: 'contact_email' }]
      },
      { model: OwnEvent, attributes: ['id', 'title', 'date'] }
    ],
    order: [[OwnEvent, 'date', 'DESC']]
  })

  return rows.map((row) => toParticipantRow(row.toJSON()))
}
