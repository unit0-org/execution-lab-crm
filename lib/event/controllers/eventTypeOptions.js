import { EventType } from '@/lib/event/models'

// The type filter's options, read from the event types that exist rather
// than hardcoded, so a new type shows up without a code change.
export async function funnelTypeOptions() {
  const rows = await EventType.findAll({
    attributes: ['name'],
    order: [['name', 'ASC']],
    raw: true
  })

  return rows.map((row) => ({ value: row.name, label: row.name }))
}
