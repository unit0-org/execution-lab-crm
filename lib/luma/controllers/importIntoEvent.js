import { OwnEvent } from '@/lib/event/models'
import { importGuest } from './importGuest'
import { summarize } from './summarize'

// Re-import guests into an existing event (an updated Luma export).
export async function importIntoEvent(organizationId, eventId, rows) {
  const event = await OwnEvent.findOne({
    where: { id: eventId, organization_id: organizationId }
  })

  if (!event) return { error: 'event not found' }

  const results = []

  for (const row of rows) {
    results.push(await importGuest(organizationId, event, row))
  }

  return summarize(event, false, results)
}
