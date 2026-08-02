import { OwnEvent, EventType } from '../models'
import { hostedEventScope } from './hostedEventScope'
import { eventTypeWhere } from './eventTypeWhere'

// Which events a page is about. A drill-in from the dashboard carries the
// period + type it was showing rather than a list of ids, so it resolves
// to the same events the tile counted; everywhere else the event
// picker's explicit ids stand.
export async function scopedEventIds({ period, type, events }) {
  if (!period && !type) return events

  const rows = await OwnEvent.findAll({
    attributes: ['id'],
    where: hostedEventScope(period),
    include: [{
      model: EventType, as: 'event_type', attributes: [],
      where: eventTypeWhere(type), required: Boolean(type)
    }],
    raw: true
  })

  return rows.map((row) => row.id)
}
