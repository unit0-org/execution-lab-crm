import { OwnEvent } from '../models'

const UNTITLED = 'Untitled event'

// Every event as a picker option, most recent first.
export async function listEventOptions() {
  const rows = await OwnEvent.findAll({
    attributes: ['id', 'title'],
    order: [['date', 'DESC']],
    raw: true
  })

  return rows.map((row) => ({ value: row.id, label: row.title || UNTITLED }))
}
