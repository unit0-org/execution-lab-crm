// One events-list row as a plain object, with its type flattened to the
// name the table shows.
export function toEventJson(row) {
  const event = row.toJSON()

  return { ...event, type: event.event_type?.name || null }
}
