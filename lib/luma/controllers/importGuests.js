import { upsertEvent } from '@/lib/event/controllers/upsertEvent'
import { eventTitleFromFileName } from './eventTitleFromFileName'
import { importGuest } from './importGuest'
import { summarize } from './summarize'

// Import parsed Luma guest rows from a CSV named after its event. The
// event (and any missing contacts) are created when they don't exist.
export async function importLumaGuests(fileName, rows) {
  const title = eventTitleFromFileName(fileName)
  const { event, created } = await upsertEvent({ title })
  const results = []

  for (const row of rows) {
    results.push(await importGuest(event, row))
  }

  return summarize(event, created, results)
}
