import { upsertLumaEvent } from './upsertEvent'
import { upsertLumaRegistration } from './upsertRegistration'

// Dispatch one inbound Luma webhook payload to the right handler.
// Currently handles event-update + registration events.
export async function handleLumaEvent(supabase, body) {
  if (body.event) await upsertLumaEvent(supabase, body.event)
  if (body.registration && body.event) {
    const eventId = await upsertLumaEvent(supabase, body.event)
    await upsertLumaRegistration(supabase, eventId, body.registration)
  }
}
