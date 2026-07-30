import { EventLinkedinConversion } from '../models'

// Point an event at a conversion rule, or re-point one already linked.
// valueCents is the optional override; null means report what each
// registrant actually paid.
export async function setEventConversion(eventId, urn, valueCents) {
  const patch = { conversion_urn: urn, conversion_value_cents: valueCents }
  const row = await EventLinkedinConversion.findOne({
    where: { event_id: eventId }
  })

  if (row) return (await row.update(patch)).toJSON()

  const created = await EventLinkedinConversion.create({
    event_id: eventId,
    ...patch
  })

  return created.toJSON()
}
