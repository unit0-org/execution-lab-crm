import { fn, col } from 'sequelize'
import { OwnEvent, EventType } from '../models'

// Events newest-first, with type and checked-in / registered counts.
export async function listEvents(organizationId) {
  const rows = await OwnEvent.findAll({
    where: { organization_id: organizationId },
    attributes: {
      include: [
        [fn('COUNT', col('participant.registered_at')), 'registered'],
        [fn('COUNT', col('participant.checked_in_at')), 'checked_in']
      ]
    },
    include: [
      { association: 'participant', attributes: [] },
      { model: EventType, as: 'event_type', attributes: ['id', 'name'] }
    ],
    group: ['own_event.id', 'event_type.id'],
    order: [[col('own_event.created_at'), 'DESC']]
  })

  return rows.map((row) => toEventJson(row.toJSON()))
}

function toEventJson(event) {
  return { ...event, type: event.event_type?.name || null }
}
