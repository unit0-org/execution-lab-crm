// The LinkedIn conversion rule an event reports into, or null when the
// event was never linked to one — which is how "don't report" is stored.
// valueCents is the optional override; null means "use what they paid".
export async function findRuleForEvent(eventId) {
  const row = await this.findOne({ where: { event_id: eventId } })

  if (!row) return null

  return { urn: row.conversion_urn, valueCents: row.conversion_value_cents }
}
