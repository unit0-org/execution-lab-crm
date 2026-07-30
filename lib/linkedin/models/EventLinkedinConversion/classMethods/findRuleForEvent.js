// The LinkedIn conversion rule an event reports into, or null when the
// event was never linked to one — which is how "don't report" is stored.
export async function findRuleForEvent(eventId) {
  const row = await this.findOne({ where: { event_id: eventId } })

  return row?.conversion_urn || null
}
