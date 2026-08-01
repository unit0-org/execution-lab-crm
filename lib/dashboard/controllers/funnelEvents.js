import { fn, col } from 'sequelize'
import { OwnEvent, EventType } from '@/lib/event/models'
import { funnelEventScope } from './funnelEventScope'
import { eventTypeWhere } from './eventTypeWhere'
import { toFunnelEvent } from './toFunnelEvent'

// Hosted events in the period (optionally one type), newest first, each
// with its registered and checked-in totals.
export async function funnelEvents({ period, type }) {
  const rows = await OwnEvent.findAll({
    attributes: {
      include: [
        [fn('COUNT', col('participant.registered_at')), 'registered'],
        [fn('COUNT', col('participant.checked_in_at')), 'attended']
      ]
    },
    where: funnelEventScope(period),
    include: [
      { association: 'participant', attributes: [] },
      {
        model: EventType, as: 'event_type', attributes: ['id', 'name'],
        where: eventTypeWhere(type), required: Boolean(type)
      }
    ],
    group: ['own_event.id', 'event_type.id'],
    order: [[col('own_event.date'), 'DESC']]
  })

  return rows.map(toFunnelEvent)
}
