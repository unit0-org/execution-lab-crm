import { listCalendarEvents } from '../api/listCalendarEvents'
import { syncOneLumaEvent } from './syncOneLumaEvent'

// Cron reconcile: pull every calendar event and import its guests, catching
// anything the live webhook dropped. No-ops until the API key is set.
export async function syncLumaGuests() {
  if (!process.env.LUMA_API_KEY) return { skipped: 'no LUMA_API_KEY' }

  const events = await listCalendarEvents()
  let guests = 0

  for (const apiEvent of events)
    guests += await syncOneLumaEvent(apiEvent)

  return { events: events.length, guests }
}
