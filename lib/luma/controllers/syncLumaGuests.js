import { listCalendarEvents } from '../api/listCalendarEvents'
import { syncOneLumaEvent } from './syncOneLumaEvent'

const eventError = (apiEvent, e) => {
  const ev = apiEvent.event || apiEvent

  return `${ev.api_id || ev.name}: ${e.message}`
}

// Cron reconcile: pull every calendar event and import its guests, catching
// anything the live webhook dropped. Each event is isolated, so one failing
// event can't abort the rest. No-ops until the API key is set.
export async function syncLumaGuests() {
  if (!process.env.LUMA_API_KEY) return { skipped: 'no LUMA_API_KEY' }

  const events = await listCalendarEvents()
  let guests = 0
  const errors = []

  for (const apiEvent of events) {
    try {
      guests += await syncOneLumaEvent(apiEvent)
    } catch (e) {
      errors.push(eventError(apiEvent, e))
    }
  }

  return { events: events.length, guests, errors }
}
