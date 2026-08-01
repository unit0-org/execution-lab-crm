// A plain event row for the dashboard: counts as numbers (Postgres returns
// COUNT as a string) and the type name lifted off the association.
export function toFunnelEvent(row) {
  const event = row.toJSON()

  return {
    id: event.id,
    title: event.title,
    date: event.date,
    type: event.event_type?.name || null,
    registered: Number(event.registered),
    attended: Number(event.attended)
  }
}
