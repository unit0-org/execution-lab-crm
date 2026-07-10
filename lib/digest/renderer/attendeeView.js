// The first-time attendees section view: who attended and which event.
export function attendeeView(attendees) {
  return {
    title: 'First-time event attendees this week',
    emptyText: 'No first-time attendees this week.',
    rows: attendees.map((a) => ({ primary: a.name, secondary: a.event }))
  }
}
