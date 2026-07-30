import { EventLinkedinConversion } from '../models'

// An event's conversion settings for the settings page, or null when the
// event was never linked to a rule.
export async function getEventConversion(eventId) {
  const row = await EventLinkedinConversion.findOne({
    where: { event_id: eventId }
  })

  return row?.toJSON() || null
}
