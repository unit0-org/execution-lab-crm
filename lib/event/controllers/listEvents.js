import { fn, col } from 'sequelize'
import { OwnEvent } from '../models'

// Events newest-first, each with its participant (attendee) count.
export async function listEvents() {
  const rows = await OwnEvent.findAll({
    attributes: {
      include: [[fn('COUNT', col('participant.id')), 'attendees']]
    },
    include: [{ association: 'participant', attributes: [] }],
    group: ['own_event.id'],
    order: [[col('own_event.created_at'), 'DESC']]
  })

  return rows.map((row) => row.toJSON())
}
