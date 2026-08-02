import { fn, col } from 'sequelize'
import { OwnEvent, EventType } from '../models'
import { hostedEventScope } from './hostedEventScope'
import { eventTypeWhere } from './eventTypeWhere'
import { toEventJson } from './toEventJson'

// Events newest-first, with type and checked-in / registered counts.
// A period narrows the list to events already hosted within it, matching
// what the dashboard funnel counts; with no period there is no date
// filter at all, so the page still shows what's coming up.
export async function listEvents({ period, type } = {}) {
  const rows = await OwnEvent.findAll({
    attributes: {
      include: [
        [fn('COUNT', col('participant.registered_at')), 'registered'],
        [fn('COUNT', col('participant.checked_in_at')), 'checked_in']
      ]
    },
    where: period ? hostedEventScope(period) : undefined,
    include: [
      { association: 'participant', attributes: [] },
      {
        model: EventType, as: 'event_type', attributes: ['id', 'name'],
        where: eventTypeWhere(type), required: Boolean(type)
      }
    ],
    group: ['own_event.id', 'event_type.id'],
    order: [[col('own_event.created_at'), 'DESC']]
  })

  return rows.map(toEventJson)
}
