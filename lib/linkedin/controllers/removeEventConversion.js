import { EventLinkedinConversion } from '../models'

// Unlink an event from its conversion rule: its registrations stop being
// reported to LinkedIn, and nothing else about the event changes.
export function removeEventConversion(eventId) {
  return EventLinkedinConversion.destroy({ where: { event_id: eventId } })
}
