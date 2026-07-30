import { EventLinkedinConversion } from '../models'

// Point an event at a conversion rule, or re-point one already linked.
export async function setEventConversion(eventId, urn) {
  const row = await EventLinkedinConversion.findOne({
    where: { event_id: eventId }
  })

  if (row) return (await row.update({ conversion_urn: urn })).toJSON()

  const created = await EventLinkedinConversion.create({
    event_id: eventId,
    conversion_urn: urn
  })

  return created.toJSON()
}
