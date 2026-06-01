// Roll per-row import results into a summary for the UI.
export function summarize(event, eventCreated, results) {
  const contactsCreated = results.filter((r) => r.contactCreated).length
  const participantsCreated =
    results.filter((r) => r.participantCreated).length

  return {
    eventId: event.id,
    eventTitle: event.title,
    eventCreated,
    contactsCreated,
    participantsCreated,
    guests: results.length
  }
}
