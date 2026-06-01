import { fn, col } from 'sequelize'
import { OwnEvent } from '../models'

// Events newest-first, with checked-in and registered attendee counts.
export async function listEvents() {
  const rows = await OwnEvent.findAll({
    attributes: {
      include: [
        [fn('COUNT', col('participant.registered_at')), 'registered'],
        [fn('COUNT', col('participant.checked_in_at')), 'checked_in']
      ]
    },
    include: [{ association: 'participant', attributes: [] }],
    group: ['own_event.id'],
    order: [[col('own_event.created_at'), 'DESC']]
  })

  return rows.map((row) => row.toJSON())
}
