import { Op } from 'sequelize'
import { EventParticipant, OwnEvent } from '../models'
import { toTimelineEntry } from './toTimelineEntry'

// Events a contact registered for or checked in to, most recent first.
export async function contactTimeline(contactId) {
  const rows = await EventParticipant.findAll({
    where: {
      contact_id: contactId,
      [Op.or]: [
        { registered_at: { [Op.ne]: null } },
        { checked_in_at: { [Op.ne]: null } }
      ]
    },
    include: [{ model: OwnEvent }],
    order: [[OwnEvent, 'date', 'DESC']]
  })

  return rows.map((row) => toTimelineEntry(row.toJSON()))
}
