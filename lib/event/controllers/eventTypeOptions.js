import { EventType } from '../models'

// The type filter's options, shared by the events list and the dashboard
// funnel. Read from the event types that exist rather than hardcoded, so
// a new type shows up without a code change.
export async function eventTypeOptions() {
  const rows = await EventType.findAll({
    attributes: ['name'],
    order: [['name', 'ASC']],
    raw: true
  })

  return rows.map((row) => ({ value: row.name, label: row.name }))
}
