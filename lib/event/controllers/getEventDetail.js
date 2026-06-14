import { OwnEvent, EventType } from '../models'
import { eventStats } from './eventStats'

// One event's editable info, its type name, and headline stats.
export async function getEventDetail(id) {
  const event = await OwnEvent.findOne({
    where: { id },
    include: [{ model: EventType, as: 'event_type', attributes: ['name'] }]
  })

  if (!event) return null

  const json = event.toJSON()
  const stats = await eventStats(id, json.date)

  return { ...json, type: json.event_type?.name || null, ...stats }
}
