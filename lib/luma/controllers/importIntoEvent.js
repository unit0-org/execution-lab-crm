import { OwnEvent } from '@/lib/event/models'
import { importGuest } from './importGuest'
import { summarize } from './summarize'

// Re-import guests into an existing event (an updated Luma export).
export async function importIntoEvent(eventId, rows) {
  const event = await OwnEvent.findByPk(eventId)

  if (!event) return { error: 'event not found' }

  const results = []

  for (const row of rows) {
    results.push(await importGuest(event, row))
  }

  return summarize(event, false, results)
}
